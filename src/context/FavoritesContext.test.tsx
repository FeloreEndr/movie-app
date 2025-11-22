import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FavoritesProvider, useFavorites, FavoriteMovie } from "./FavoritesContext";

const TEST_MOVIE: FavoriteMovie = {
    imdbID: "tt1234567",
    Title: "Test Movie",
    Year: "2024",
    Type: "movie",
    Poster: "https://example.com/poster.jpg",
};

function TestConsumer() {
    const { favorites, isFavorite, addFavorite, removeFavorite, toggleFavorite } =
        useFavorites();

    return (
        <div>
            <div data-testid="favorites-count">{favorites.length}</div>
            <div data-testid="is-favorite">
        {isFavorite(TEST_MOVIE.imdbID) ? "yes" : "no"}
    </div>
    <button onClick={() => addFavorite(TEST_MOVIE)}>add</button>
    <button onClick={() => removeFavorite(TEST_MOVIE.imdbID)}>remove</button>
    <button onClick={() => toggleFavorite(TEST_MOVIE)}>toggle</button>
    </div>
);
}

describe("FavoritesContext", () => {
    const STORAGE_KEY = "movie_app_favorites";

    beforeEach(() => {
        localStorage.clear();
        jest.restoreAllMocks();
    });

    it("throws if useFavorites is used outside FavoritesProvider", () => {
        const consoleErrorSpy = jest
            .spyOn(console, "error")
            .mockImplementation(() => {}); // tłumimy błędy Reacta w konsoli

        expect(() => render(<TestConsumer />)).toThrow(
            "useFavorites must be used within FavoritesProvider"
        );

        consoleErrorSpy.mockRestore();
    });

    it("initializes favorites from localStorage when available", () => {
        const stored: FavoriteMovie[] = [
            { ...TEST_MOVIE, imdbID: "tt0000001", Title: "Stored movie" },
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));

        render(
            <FavoritesProvider>
                <TestConsumer />
            </FavoritesProvider>
        );

        expect(screen.getByTestId("favorites-count")).toHaveTextContent("1");
        expect(screen.getByTestId("is-favorite")).toHaveTextContent("no");
    });

    it("handles invalid JSON in localStorage gracefully", () => {
        localStorage.setItem(STORAGE_KEY, "{this-is-invalid-json");

        render(
            <FavoritesProvider>
                <TestConsumer />
            </FavoritesProvider>
        );

        expect(screen.getByTestId("favorites-count")).toHaveTextContent("0");
    });

    it("adds favorite and avoids duplicates", () => {
        render(
            <FavoritesProvider>
                <TestConsumer />
            </FavoritesProvider>
        );

        const count = screen.getByTestId("favorites-count");
        const isFav = screen.getByTestId("is-favorite");
        const addButton = screen.getByText("add");

        expect(count).toHaveTextContent("0");
        expect(isFav).toHaveTextContent("no");

        fireEvent.click(addButton);
        expect(count).toHaveTextContent("1");
        expect(isFav).toHaveTextContent("yes");

        fireEvent.click(addButton);
        expect(count).toHaveTextContent("1");
    });

    it("removes favorite", () => {
        render(
            <FavoritesProvider>
                <TestConsumer />
            </FavoritesProvider>
        );

        const count = screen.getByTestId("favorites-count");
        const isFav = screen.getByTestId("is-favorite");
        const addButton = screen.getByText("add");
        const removeButton = screen.getByText("remove");

        fireEvent.click(addButton);
        expect(count).toHaveTextContent("1");
        expect(isFav).toHaveTextContent("yes");

        fireEvent.click(removeButton);
        expect(count).toHaveTextContent("0");
        expect(isFav).toHaveTextContent("no");
    });

    it("toggles favorite on and off", () => {
        render(
            <FavoritesProvider>
                <TestConsumer />
            </FavoritesProvider>
        );

        const count = screen.getByTestId("favorites-count");
        const isFav = screen.getByTestId("is-favorite");
        const toggleButton = screen.getByText("toggle");

        expect(count).toHaveTextContent("0");
        expect(isFav).toHaveTextContent("no");

        fireEvent.click(toggleButton);
        expect(count).toHaveTextContent("1");
        expect(isFav).toHaveTextContent("yes");

        fireEvent.click(toggleButton);
        expect(count).toHaveTextContent("0");
        expect(isFav).toHaveTextContent("no");
    });
});
