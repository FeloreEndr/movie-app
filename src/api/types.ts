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

export interface MovieDetails {
    imdbID: string;
    Title: string;
    Year: string;
    Genre: string;
    Plot: string;
    Director: string;
    Actors: string;
    Runtime: string;
    imdbRating: string;
    Poster: string;
    Type: string;
}

export interface SearchParams {
    title: string;
    year: string;
    type: string;
    page: number;
}

export interface MoviesSearchResult {
    data: MovieItem[];
    total: number;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
}

