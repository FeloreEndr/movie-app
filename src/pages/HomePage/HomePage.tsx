import { useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import Pagination from "../../components/Pagination";
import { useMoviesSearch, SearchParams } from "../../hooks/useMoviesSearch";

export default function HomePage() {
    const [params, setParams] = useState<SearchParams>({
        title: "",
        year: "",
        type: "",
        page: 1
    });

    const [pageSize, setPageSize] = useState<number>(10);

    const { data, total, loading, error } = useMoviesSearch(params);

    const handleSearch = (p: { title: string; year: string; type: string }) => {
        setParams({ ...p, page: 1 });
    };

    const handlePageChange = (page: number) => {
        setParams((prev) => ({ ...prev, page }));
    };

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
    };

    const hasSearched = params.title !== "";

    return (
        <main>
            <h1>Movie search</h1>

            <SearchForm onSearch={handleSearch} />

            <section aria-live="polite">
                {loading && <p>Loading...</p>}
                {error && !loading && <p role="alert">{error}</p>}
                {!loading && !error && hasSearched && data.length === 0 && (
                    <p>No results found.</p>
                )}
            </section>

            {!error && <MovieList movies={data} />}

            {hasSearched && total > 0 && (
                <Pagination
                    currentPage={params.page}
                    totalResults={total}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            )}
        </main>
    );
}
