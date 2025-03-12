import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Song } from "./Song"; 

test("renders song with title, artist, and year", () => {
    render(<Song title="Green Light" artist="Lorde" year={2017} />);
    const songElement = screen.getByText(/Green Light by Lorde, Release date: 2017/i);
    expect(songElement).toBeInTheDocument(); 
});

test("renders song with genre when provided", () => {
    render(<Song title="Red" artist="Taylor Swift" year={2012} genre="Pop" />);
    const songElement = screen.getByText(/Red by Taylor Swift, Release date: 2012, Genre: Pop/i);
    expect(songElement).toBeInTheDocument();
});
