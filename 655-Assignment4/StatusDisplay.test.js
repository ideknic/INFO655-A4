import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Status from "./StatusDisplay";


describe("StatusDisplay Component", () => {
  test("displays 'Paused' initially", () => {
    render(<Status status="Paused" />);
    expect(screen.getByText(/Paused/i)).toBeInTheDocument();
  });

  test("updates status when playing a song", () => {
    render(<Status status="Playing: Test Song - Test Artist" />);
    expect(screen.getByText(/Playing: Test Song - Test Artist/i)).toBeInTheDocument();
  });

  test("updates status when playing a podcast", () => {
    render(<Status status="Playing: AI Advances" />);
    expect(screen.getByText(/Playing: AI Advances/i)).toBeInTheDocument();
  });
});
