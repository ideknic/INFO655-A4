import React from "react";
import { render, screen, act } from "@testing-library/react";
import Playlist from "./Playlist";
import "@testing-library/jest-dom";

//mock fetching
global.fetch = jest.fn((url) => {
  const match = url.match(/(\d+)$/);
  const index = match ? parseInt(match[1], 10) : 0;

  return Promise.resolve({
    json: () =>
      Promise.resolve(
        index % 2 === 0
          ? { title: `Song ${index}`, artist: `Artist ${index}`, year: 2023 }
          : { episodeTitle: `Podcast ${index}`, season: 1, episode: index }
      ),
  });
});

beforeEach(() => {
  fetch.mockClear();
});

test("renders playlist with fetched data", async () => {
  await act(async () => {
    render(<Playlist />);
  });

  expect(
    await screen.findByText("Song 0 by Artist 0, Release date: 2023")
  ).toBeInTheDocument();
  expect(await screen.findByText("Season 1, Episode 1, Title: Podcast 1")).toBeInTheDocument();
});

