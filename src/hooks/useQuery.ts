import { useQuery as useReactQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/omdb";
import type { SearchResponse, MovieItem } from "../api/types";

export interface SearchParams {
    title: string;
    year: string;
    type: string;
    page: number;
}

interface MoviesQueryResult {
    data: MovieItem[];
    total: number;
    loading: boolean;
    error: string | null;
}

export function useQuery(params: SearchParams): MoviesQueryResult {
    const { title, year, type, page } = params;

    const { data, isLoading, error } = useReactQuery({
        queryKey: ["movies", { title, year, type, page }],
        queryFn: () => searchMovies(title, year, type, page),
        enabled: Boolean(title),
    });

    const response = data as SearchResponse | undefined;

    const movies: MovieItem[] = response?.Search ?? [];
    const total = Number(response?.totalResults ?? 0);
    const errorMessage = error ? error.message : null;

    return {
        data: movies,
        total,
        loading: isLoading,
        error: errorMessage,
    };
}
