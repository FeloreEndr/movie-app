import type { MovieItem } from "../../../api/types";
import { useFavorites } from "../../../context/FavoritesContext";
import {
    ListSection,
    Grid,
    Card,
    PosterWrapper,
    Poster,
    CardBody,
    Title,
    Meta,
    CardActions,
    DetailsLink,
    FavoriteButton
} from './styles'

interface Props {
    movies: MovieItem[];
}

export default function MovieList({ movies }: Props) {
    const { isFavorite, toggleFavorite } = useFavorites();

    if (movies.length === 0) return null;

    return (
        <ListSection aria-label="Search results">
            <Grid>
                {movies.map((m) => {
                    const favorite = isFavorite(m.imdbID);

                    return (
                        <Card key={m.imdbID}>
                            <PosterWrapper>
                                {m.Poster !== "N/A" ? (
                                    <Poster src={m.Poster} alt={`${m.Title} poster`} />
                                ) : null}
                            </PosterWrapper>

                            <CardBody>
                                <Title>{m.Title}</Title>
                                <Meta>
                                    {m.Year} · {m.Type}
                                </Meta>

                                <CardActions>
                                    <DetailsLink to={`/movie/${m.imdbID}`}>Details</DetailsLink>
                                    <FavoriteButton
                                        type="button"
                                        onClick={() =>
                                            toggleFavorite({
                                                imdbID: m.imdbID,
                                                Title: m.Title,
                                                Year: m.Year,
                                                Type: m.Type,
                                                Poster: m.Poster,
                                            })
                                        }
                                    >
                                        {favorite ? "Remove from favorites" : "Add to favorites"}
                                    </FavoriteButton>
                                </CardActions>
                            </CardBody>
                        </Card>
                    );
                })}
            </Grid>
        </ListSection>
    );
}