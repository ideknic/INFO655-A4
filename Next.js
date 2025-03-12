import React from "react";
import "./stylesheet.css";

const NextButton = ({ nextTrack }) =>
  React.createElement("button", { className: "button", onClick: nextTrack }, "⏭");

export default NextButton;

