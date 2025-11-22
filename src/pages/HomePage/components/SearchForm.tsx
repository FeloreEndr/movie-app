import React, { useState } from "react";
import { Form, FormRow, Field, Label, Input, Select, SubmitRow, PrimaryButton } from './styles'

interface Props {
    onSearch: (params: { title: string; year: string; type: string }) => void;
}

export default function SearchForm({ onSearch }: Props) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSearch({ title: title.trim(), year: year.trim(), type });
    };

    return (
        <Form onSubmit={handleSubmit} aria-label="Movie search form">
            <FormRow>
                <Field>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        aria-label="Search by title"
                        placeholder="e.g. Batman"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Field>

                <Field>
                    <Label htmlFor="year">Year</Label>
                    <Input
                        id="year"
                        aria-label="Filter by year"
                        placeholder="e.g. 2010"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </Field>

                <Field>
                    <Label htmlFor="type">Type</Label>
                    <Select
                        id="type"
                        aria-label="Filter by type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>
                    </Select>
                </Field>
            </FormRow>

            <SubmitRow>
                <PrimaryButton type="submit">Search</PrimaryButton>
            </SubmitRow>
        </Form>
    );
}