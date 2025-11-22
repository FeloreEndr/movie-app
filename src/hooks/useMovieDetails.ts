import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/omdb";
import { MovieDetails } from "../api/types";

export function useMovieDetails(imdbID: string | undefined) {
    const [data, setData] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!imdbID) return;

        setLoading(true);
        setError(null);
        setData(null);

        getMovieDetails(imdbID)
            .then((movie) => setData(movie))
            .catch((err) => setError(err.message || "Unknown error"))
            .finally(() => setLoading(false));
    }, [imdbID]);

    return { data, loading, error };
}
