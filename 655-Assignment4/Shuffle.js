import React from "react";
import "./stylesheet.css";

const ShuffleButton = ({ shufflePlaylist }) =>
  React.createElement("button", { className: "button", onClick: shufflePlaylist }, "⇆");

export default ShuffleButton;
