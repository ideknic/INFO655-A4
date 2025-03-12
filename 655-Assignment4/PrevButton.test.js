import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrevButton from "./Previous";
import "@testing-library/jest-dom";

describe("PrevButton Component", () => {
  test("renders previous button", () => {
    render(<PrevButton prevTrack={() => {}} />);
    expect(screen.getByRole("button", { name: "⏮" })).toBeInTheDocument(); 
  });

  test("calls prevTrack function when clicked", () => {
    const prevMock = jest.fn();
    render(<PrevButton prevTrack={prevMock} />);

    fireEvent.click(screen.getByRole("button", { name: "⏮" })); 
    expect(prevMock).toHaveBeenCalledTimes(1);
  });
});
