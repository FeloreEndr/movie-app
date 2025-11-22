import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery, SearchParams } from "./useQuery";
import { searchMovies } from "../api/omdb";
import type { MovieItem, SearchResponse } from "../api/types";

jest.mock("../api/omdb");

function createWrapper() {
    const queryClient = new QueryClient();
    return function Wrapper({ children }: { children: React.ReactNode }) {
        return (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        );
    };
}

const mockMovie: MovieItem = {
    imdbID: "tt1234567",
    Title: "Test movie",
    Year: "2024",
    Type: "movie",
    Poster: "https://example.com/poster.jpg",
};

describe("useQuery (movies search)", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("does nothing when title is empty (query disabled)", () => {
        const params: SearchParams = {
            title: "",
            year: "",
            type: "",
            page: 1,
        };

        const wrapper = createWrapper();

        const { result } = renderHook(() => useQuery(params), { wrapper });

        expect(searchMovies).not.toHaveBeenCalled();
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual([]);
        expect(result.current.total).toBe(0);
        expect(result.current.error).toBeNull();
    });

    it("calls searchMovies and maps response on success", async () => {
        const params: SearchParams = {
            title: "Batman",
            year: "",
            type: "",
            page: 2,
        };

        const response: SearchResponse = {
            Search: [mockMovie],
            totalResults: "25",
            Response: "True",
        };

        (searchMovies as jest.Mock).mockResolvedValue(response);

        const wrapper = createWrapper();

        const { result } = renderHook(() => useQuery(params), { wrapper });

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(searchMovies).toHaveBeenCalledTimes(1);
        expect(searchMovies).toHaveBeenCalledWith(
            "Batman",
            "",
            "",
            2
        );

        expect(result.current.data).toEqual([mockMovie]);
        expect(result.current.total).toBe(25);
        expect(result.current.error).toBeNull();
    });

    it("handles error from searchMovies", async () => {
        const params: SearchParams = {
            title: "Batman",
            year: "",
            type: "",
            page: 1,
        };

        (searchMovies as jest.Mock).mockRejectedValue(
            new Error("Network error")
        );

        const wrapper = createWrapper();

        const { result } = renderHook(() => useQuery(params), { wrapper });

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(true);
        });

        expect(searchMovies).toHaveBeenCalledTimes(1);
        expect(result.current.data).toEqual([]);
        expect(result.current.total).toBe(0);
        expect(result.current.error).toBe(null);
    });
});
