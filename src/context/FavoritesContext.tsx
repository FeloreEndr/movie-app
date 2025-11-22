import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { MovieItem } from "../api/types";

export type FavoriteMovie = Pick<MovieItem, "imdbID" | "Title" | "Year" | "Type" | "Poster">;

interface FavoritesContextValue {
    favorites: FavoriteMovie[];
    isFavorite: (id: string) => boolean;
    addFavorite: (movie: FavoriteMovie) => void;
    removeFavorite: (id: string) => void;
    toggleFavorite: (movie: FavoriteMovie) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

const STORAGE_KEY = "movie_app_favorites";

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<FavoriteMovie[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? (JSON.parse(raw) as FavoriteMovie[]) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        } catch {
            // ignore
        }
    }, [favorites]);

    const isFavorite = (id: string) => favorites.some((f) => f.imdbID === id);

    const addFavorite = (movie: FavoriteMovie) => {
        setFavorites((prev) => {
            if (prev.some((f) => f.imdbID === movie.imdbID)) return prev;
            return [...prev, movie];
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((f) => f.imdbID !== id));
    };

    const toggleFavorite = (movie: FavoriteMovie) => {
        setFavorites((prev) => {
            if (prev.some((f) => f.imdbID === movie.imdbID)) {
                return prev.filter((f) => f.imdbID !== movie.imdbID);
            }
            return [...prev, movie];
        });
    };

    const value = useMemo(
        () => ({ favorites, isFavorite, addFavorite, removeFavorite, toggleFavorite }),
        [favorites]
    );

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export function useFavorites() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) {
        throw new Error("useFavorites must be used within FavoritesProvider");
    }
    return ctx;
}
