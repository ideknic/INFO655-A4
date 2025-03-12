import React from "react";
import "./stylesheet.css";

const PlayPauseButton = ({ isPlaying, playPause }) =>
  React.createElement("button", { className: "button", onClick: playPause }, isPlaying ? "⏸" : "▶");

export default PlayPauseButton;
