import { useParams } from "react-router-dom";

import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useFavorites } from "../../context/FavoritesContext";
import {
    PageWrapper,
    BackLink,
    StatusText,
    Article,
    Header,
    Title,
    MetaRow,
    Genre,
    RatingTag,
    FavoriteButton,
    Content,
    PosterWrapper,
    Poster,
    TextSection,
    SectionTitle,
    SectionParagraph,
} from "./styles";

export default function MovieDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useMovieDetails(id);
    const { isFavorite, toggleFavorite } = useFavorites();

    if (!id) {
        return (
            <PageWrapper>
                <StatusText>Missing movie id.</StatusText>
            </PageWrapper>
        );
    }

    const favorite = data ? isFavorite(data.imdbID) : false;

    return (
        <PageWrapper>
            <BackLink to="/">← Back to search</BackLink>

            {loading && <StatusText>Loading...</StatusText>}
            {error && !loading && <StatusText role="alert">{error}</StatusText>}

            {!loading && !error && data && (
                <Article aria-label={`Details for ${data.Title}`}>
                    <Header>
                        <div>
                            <Title>{data.Title}</Title>
                            <MetaRow>
                <span>
                  {data.Year} · {data.Type} · {data.Runtime}
                </span>
                                <Genre>{data.Genre}</Genre>
                            </MetaRow>
                        </div>

                        <div>
                            <RatingTag>IMDb {data.imdbRating}</RatingTag>
                            <FavoriteButton
                                type="button"
                                onClick={() =>
                                    toggleFavorite({
                                        imdbID: data.imdbID,
                                        Title: data.Title,
                                        Year: data.Year,
                                        Type: data.Type,
                                        Poster: data.Poster,
                                    })
                                }
                            >
                                {favorite ? "Remove from favorites" : "Add to favorites"}
                            </FavoriteButton>
                        </div>
                    </Header>

                    <Content>
                        {data.Poster && data.Poster !== "N/A" && (
                            <PosterWrapper>
                                <Poster src={data.Poster} alt={`${data.Title} poster`} />
                            </PosterWrapper>
                        )}

                        <TextSection>
                            <SectionTitle>Plot</SectionTitle>
                            <SectionParagraph>{data.Plot}</SectionParagraph>

                            <SectionTitle>Director</SectionTitle>
                            <SectionParagraph>{data.Director}</SectionParagraph>

                            <SectionTitle>Actors</SectionTitle>
                            <SectionParagraph>{data.Actors}</SectionParagraph>
                        </TextSection>
                    </Content>
                </Article>
            )}
        </PageWrapper>
    );
}
