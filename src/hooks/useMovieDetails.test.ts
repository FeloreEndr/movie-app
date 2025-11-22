import { renderHook, act } from "@testing-library/react";
import { useMovieDetails } from "./useMovieDetails";
import { getMovieDetails } from "../api/omdb";
import type { MovieDetails } from "../api/types";

// mock API
jest.mock("../api/omdb");

const mockMovie: MovieDetails = {
    Title: "Batman Begins",
    Year: "2005",
    Runtime: "140 min",
    Genre: "Action",
    Director: "Christopher Nolan",
    Actors: "Christian Bale",
    Plot: "Test plot",
    Poster: "http://example.com/poster.jpg",
    imdbID: "tt0372784",
    Type: "movie",
    imdbRating: "8.2",
};

describe("useMovieDetails", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("does nothing when imdbID is undefined", () => {
        const { result } = renderHook(() => useMovieDetails(undefined));

        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBe(null);

        expect(getMovieDetails).not.toHaveBeenCalled();
    });

    it("loads movie details successfully", async () => {
        (getMovieDetails as jest.Mock).mockResolvedValue(mockMovie);

        const { result, rerender } = renderHook(
            (id) => useMovieDetails(id),
            { initialProps: "tt0372784" }
        );

        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBe(null);

        await act(async () => {
            await Promise.resolve();
        });

        expect(getMovieDetails).toHaveBeenCalledWith("tt0372784");
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(mockMovie);
        expect(result.current.error).toBe(null);
    });

    it("handles API error", async () => {
        (getMovieDetails as jest.Mock).mockRejectedValue(
            new Error("Movie not found")
        );

        const { result } = renderHook(() => useMovieDetails("bad-id"));

        expect(result.current.loading).toBe(true);

        await act(async () => {
            await Promise.resolve();
        });

        expect(getMovieDetails).toHaveBeenCalledWith("bad-id");

        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBe("Movie not found");
    });

    it("resets and re-fetches when imdbID changes", async () => {
        (getMovieDetails as jest.Mock).mockResolvedValue(mockMovie);

        const { result, rerender } = renderHook(
            (id) => useMovieDetails(id),
            { initialProps: "id1" }
        );

        await act(async () => { await Promise.resolve(); });

        expect(result.current.data).toEqual(mockMovie);

        const newMovie = { ...mockMovie, imdbID: "id2", Title: "Different" };
        (getMovieDetails as jest.Mock).mockResolvedValue(newMovie);

        rerender("id2");

        expect(result.current.data).toBe(null);
        expect(result.current.loading).toBe(true);

        await act(async () => { await Promise.resolve(); });

        expect(result.current.data).toEqual(newMovie);
    });
});
