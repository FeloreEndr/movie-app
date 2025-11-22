import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { AppShell, AppHeader, HeaderInner, Logo, Nav, Main, Container } from "./styles";

function App() {
    return (
        <AppShell>
            <AppHeader>
                <HeaderInner>
                    <Logo>MovieApp</Logo>
                    <Nav aria-label="Main navigation">
                        <Link to="/">Search</Link>
                        <Link to="/favorites">Favorites</Link>
                    </Nav>
                </HeaderInner>
            </AppHeader>

            <Main>
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movie/:id" element={<MovieDetailsPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </Container>
            </Main>
        </AppShell>
    );
}

export default App;
