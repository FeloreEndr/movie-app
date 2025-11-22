import type { SearchResponse, MovieDetails } from "./types";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = process.env.REACT_APP_OMDB_API_KEY ?? "dd5ad32b";

export async function searchMovies(
    title: string,
    year: string,
    type: string,
    page: number
): Promise<SearchResponse> {
    const params = new URLSearchParams({
        apikey: API_KEY,
        s: title,
        page: String(page),
    });

    if (year) params.append("y", year);
    if (type) params.append("type", type);

    const res = await fetch(`${API_URL}?${params.toString()}`);
    const json = (await res.json()) as SearchResponse;

    if (json.Response === "False") {
        throw new Error(json.Error || "Unknown error");
    }

    return json;
}

export async function getMovieDetails(imdbID: string): Promise<MovieDetails> {
    const params = new URLSearchParams({
        apikey: API_KEY,
        i: imdbID,
        plot: "full",
    });

    const res = await fetch(`${API_URL}?${params.toString()}`);
    const json = (await res.json()) as MovieDetails & {
        Response?: "True" | "False";
        Error?: string;
    };

    if (json.Response === "False") {
        throw new Error(json.Error || "Movie not found");
    }

    return json as MovieDetails;
}
