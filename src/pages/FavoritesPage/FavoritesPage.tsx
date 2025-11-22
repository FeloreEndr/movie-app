import { useFavorites } from "../../context/FavoritesContext";
import {
    PageWrapper,
    Header,
    Title,
    BackLink,
    EmptyState,
    List,
    ListItem,
    MovieInfo,
    MovieLink,
    RemoveButton,
} from "./styles";

export default function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <PageWrapper>
            <Header>
                <Title>Favorite movies</Title>
                <BackLink to="/">← Back to search</BackLink>
            </Header>

            {favorites.length === 0 ? (
                <EmptyState>You have no favorite movies yet.</EmptyState>
            ) : (
                <section aria-label="Favorite movies">
                    <List>
                        {favorites.map((m) => (
                            <ListItem key={m.imdbID}>
                                <MovieInfo>
                                    <MovieLink to={`/movie/${m.imdbID}`}>
                                        {m.Title} ({m.Year})
                                    </MovieLink>
                                    <span>{m.Type}</span>
                                </MovieInfo>
                                <RemoveButton
                                    type="button"
                                    onClick={() => removeFavorite(m.imdbID)}
                                >
                                    Remove
                                </RemoveButton>
                            </ListItem>
                        ))}
                    </List>
                </section>
            )}
        </PageWrapper>
    );
}
