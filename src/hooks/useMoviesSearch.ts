import { useEffect, useState } from "react";
import { searchMovies, MovieItem } from "../api/omdb";

export interface SearchParams {
    title: string;
    year: string;
    type: string;
    page: number;
}

export function useMoviesSearch({ title, year, type, page }: SearchParams) {
    const [data, setData] = useState<MovieItem[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!title) {
            setData([]);
            setTotal(0);
            setError(null);
            return;
        }

        setLoading(true);
        setError(null);

        searchMovies(title, year, type, page)
            .then((res) => {
                if (res.Response === "False") {
                    setError(res.Error || "Unknown error");
                    setData([]);
                    setTotal(0);
                } else {
                    setData(res.Search || []);
                    setTotal(Number(res.totalResults || 0));
                }
            })
            .catch(() => {
                setError("Network error");
                setData([]);
                setTotal(0);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [title, year, type, page]);

    return { data, total, loading, error };
}
