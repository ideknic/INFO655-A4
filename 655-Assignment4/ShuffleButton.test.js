import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShuffleButton from "./Shuffle";
import "@testing-library/jest-dom";

describe("ShuffleButton Component", () => {
  test("renders shuffle button", () => {
    render(<ShuffleButton shufflePlaylist={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calls shuffle function when clicked", () => {
    const shuffleMock = jest.fn();
    render(<ShuffleButton shufflePlaylist={shuffleMock} />);

    fireEvent.click(screen.getByRole("button"));
    expect(shuffleMock).toHaveBeenCalledTimes(1);
  });
});

