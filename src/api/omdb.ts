const API_URL = "http://www.omdbapi.com/";

export interface MovieItem {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface SearchResponse {
    Search?: MovieItem[];
    totalResults?: string;
    Response: "True" | "False";
    Error?: string;
}

export async function searchMovies(
    title: string,
    year: string,
    type: string,
    page: number
): Promise<SearchResponse> {
    const params = new URLSearchParams({
        apikey: process.env.REACT_APP_OMDB_API_KEY!,
        s: title,
        page: String(page),
    });

    if (year) params.append("y", year);
    if (type) params.append("type", type);

    const res = await fetch(`${API_URL}?${params.toString()}`);
    return res.json();
}
