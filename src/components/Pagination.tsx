import React from "react";
import {
    Wrapper,
    PageSizeWrapper,
    PageSizeSelect,
    Controls,
    Button,
    Info,
} from "./styles";

interface PaginationProps {
    currentPage: number;
    totalResults: number;
    pageSize: number;
    pageSizeOptions?: number[];
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

const defaultOptions = [5, 10];

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
        <Wrapper aria-label="Pagination">
            <PageSizeWrapper>
                <span>Items per page:</span>
                <PageSizeSelect
                    value={pageSize}
                    onChange={handlePageSizeChange}
                >
                    {pageSizeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </PageSizeSelect>
            </PageSizeWrapper>

            <Controls>
                <Button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={!canGoPrev}
                >
                    Prev
                </Button>

                <Info>
                    Page {currentPage} / {totalPages}
                </Info>

                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={!canGoNext}
                >
                    Next
                </Button>
            </Controls>
        </Wrapper>
    );
}
