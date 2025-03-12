import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NextButton from "./Next"; // Correct import
import "@testing-library/jest-dom";

describe("NextButton Component", () => {
  test("renders next button", () => {
    render(<NextButton nextTrack={() => {}} />);
    expect(screen.getByRole("button", { name: "⏭" })).toBeInTheDocument();
  });

  test("calls nextTrack function when clicked", () => {
    const nextMock = jest.fn();
    render(<NextButton nextTrack={nextMock} />);

    fireEvent.click(screen.getByRole("button", { name: "⏭" })); 
    expect(nextMock).toHaveBeenCalledTimes(1);
  });
});
