import React, { useState } from "react";

interface Props {
    onSearch: (params: { title: string; year: string; type: string }) => void;
}

export default function SearchForm({ onSearch }: Props) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ title, year, type });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label="Search by title"
                placeholder="Movie title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                aria-label="Filter by year"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <select
                aria-label="Filter by type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">All</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>

            <button type="submit">Search</button>
        </form>
    );
}
