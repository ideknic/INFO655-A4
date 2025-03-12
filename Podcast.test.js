import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Podcast } from "./Podcast";  

describe("Podcast Component", () => {
  test("renders correctly with valid props", () => {
    render(<Podcast season={1} episode={2} episodeTitle="Tech Talk" />);
    expect(screen.getByText(/Season 1, Episode 2, Title: Tech Talk/i)).toBeInTheDocument();
  });

  test("renders correctly when season is missing", () => {
    render(<Podcast episode={5} episodeTitle="AI Advances" />);
    expect(screen.getByText(/Episode 5, Title: AI Advances/i)).toBeInTheDocument();
  });

  test("renders correctly when episode is missing", () => {
    render(<Podcast season={2} episodeTitle="Future of UX" />);
    expect(screen.getByText(/Season 2, Title: Future of UX/i)).toBeInTheDocument();
  });
});
