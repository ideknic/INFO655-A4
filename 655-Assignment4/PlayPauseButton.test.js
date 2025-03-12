import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import PlayPauseButton from "./PlayPause";

describe("PlayPauseButton Component", () => {
  test("displays '▶' when isPlaying is false", () => {
    render(<PlayPauseButton isPlaying={false} playPause={() => {}} />);
    expect(screen.getByText("▶")).toBeInTheDocument();
  });

  test("displays '⏸' when isPlaying is true", () => {
    render(<PlayPauseButton isPlaying={true} playPause={() => {}} />);
    expect(screen.getByText("⏸")).toBeInTheDocument();
  });

  test("calls playPause function on click", () => {
    const playPauseMock = jest.fn();
    render(<PlayPauseButton isPlaying={false} playPause={playPauseMock} />);
    
    fireEvent.click(screen.getByText("▶")); 
    
    expect(playPauseMock).toHaveBeenCalledTimes(1);
  });
});
