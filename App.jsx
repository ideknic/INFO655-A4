import React from "react";
import Playlist from "./Playlist";
import "./stylesheet.css"

function App() {
  return React.createElement(
    "div",
    {className: "borderAll paddingAll"},
    React.createElement("h2", {className: "playlistTitle"}, "My Playlist"),
    React.createElement(Playlist) 
  );
}

export default App;