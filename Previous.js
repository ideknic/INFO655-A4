import React from "react";
import "./stylesheet.css";

const PrevButton = ({ prevTrack }) =>
  React.createElement("button", { className: "button", onClick: prevTrack }, "⏮");

export default PrevButton;

