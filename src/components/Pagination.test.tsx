import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

function setup(
    overrideProps: Partial<React.ComponentProps<typeof Pagination>> = {}
) {
    const props: React.ComponentProps<typeof Pagination> = {
        currentPage: 1,
        totalResults: 50,
        pageSize: 10,
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn(),
        ...overrideProps,
    };

    render(<Pagination {...props} />);

    const prevButton = screen.getByRole("button", { name: /prev/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    const pageSizeSelect = screen.getByRole("combobox");

    return {
        props,
        prevButton,
        nextButton,
        pageSizeSelect,
    };
}

describe("Pagination", () => {
    it("renders correct page info based on currentPage, totalResults and pageSize", () => {
        setup({
            currentPage: 2,
            totalResults: 20,
            pageSize: 5,
        });

        const pageInfo = screen.getByText(/Page\s*2\s*\/\s*4/i);

        expect(pageInfo).toBeInTheDocument();
    });

    it("disables Prev on first page and enables Next", () => {
        const { prevButton, nextButton } = setup({
            currentPage: 1,
            totalResults: 50,
            pageSize: 10,
        });

        expect(prevButton).toBeDisabled();
        expect(nextButton).not.toBeDisabled();
    });

    it("disables Next on last page and enables Prev", () => {
        const { prevButton, nextButton } = setup({
            currentPage: 5,
            totalResults: 50,
            pageSize: 10,
        });

        expect(prevButton).not.toBeDisabled();
        expect(nextButton).toBeDisabled();
    });

    it("calls onPageChange with previous and next page numbers", () => {
        const onPageChange = jest.fn();
        const { prevButton, nextButton } = setup({
            currentPage: 3,
            totalResults: 50,
            pageSize: 10,
            onPageChange,
        });

        fireEvent.click(prevButton);
        fireEvent.click(nextButton);

        expect(onPageChange).toHaveBeenCalledTimes(2);
        expect(onPageChange).toHaveBeenNthCalledWith(1, 2); // 3 -> 2
        expect(onPageChange).toHaveBeenNthCalledWith(2, 4); // 3 -> 4
    });

    it("calls onPageSizeChange and resets page to 1 when items per page changes", () => {
        const onPageChange = jest.fn();
        const onPageSizeChange = jest.fn();
        const { pageSizeSelect } = setup({
            currentPage: 3,
            totalResults: 100,
            pageSize: 10,
            onPageChange,
            onPageSizeChange,
        });

        fireEvent.change(pageSizeSelect, { target: { value: "5" } });

        expect(onPageSizeChange).toHaveBeenCalledTimes(1);
        expect(onPageSizeChange).toHaveBeenCalledWith(5);

        expect(onPageChange).toHaveBeenCalledTimes(1);
        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it("renders default page size options 5 and 10", () => {
        setup();

        const options = screen.getAllByRole("option").map((opt) => opt.textContent);
        expect(options).toContain("5");
        expect(options).toContain("10");
    });
});
