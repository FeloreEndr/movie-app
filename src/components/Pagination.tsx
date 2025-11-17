import React from "react";

interface PaginationProps {
    currentPage: number;
    totalResults: number;
    pageSize: number;
    pageSizeOptions?: number[];
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

const defaultOptions = [10, 20, 50];

export default function Pagination({
        currentPage,
        totalResults,
        pageSize,
        pageSizeOptions = defaultOptions,
        onPageChange,
        onPageSizeChange,
    }: PaginationProps) {
    const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = Number(e.target.value);
        onPageSizeChange(newSize);
        onPageChange(1);
    };

    return (
        <nav aria-label="Pagination" className="pagination">
            <div className="pagination__page-size">
                <label htmlFor="pageSizeSelect">Items per page:</label>
                <select
                    id="pageSizeSelect"
                    value={pageSize}
                    onChange={handlePageSizeChange}
                >
                    {pageSizeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            <div className="pagination__controls">
                <button onClick={() => onPageChange(currentPage - 1)} disabled={!canGoPrev}>
                    Prev
                </button>

                <span>
                  Page {currentPage} / {totalPages}
                </span>

                <button onClick={() => onPageChange(currentPage + 1)} disabled={!canGoNext}>
                    Next
                </button>
            </div>
        </nav>
    );
}
