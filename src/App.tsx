import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/movie/:id" element={<MovieDetailsPage />} />*/}
            {/*<Route path="/favorites" element={<FavoritesPage />} />*/}
        </Routes>
    );
}

export default App;