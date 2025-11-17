import { MovieItem } from "../../../api/omdb";
import { Link } from "react-router-dom";

interface Props {
    movies: MovieItem[];
}

export default function MovieList({ movies }: Props) {
    return (
        <div className="movie-list">
            {movies.map((m) => (
                <div key={m.imdbID} className="movie-card">
                    <img
                        src={m.Poster !== "N/A" ? m.Poster : "/placeholder.png"}
                        alt={`${m.Title} poster`}
                    />
                    <h3>{m.Title}</h3>
                    <p>{m.Year}</p>
                    <p>{m.Type}</p>

                    <Link to={`/movie/${m.imdbID}`}>Details</Link>
                </div>
            ))}
        </div>
    );
}
