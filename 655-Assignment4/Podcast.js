import React from "react";

const podcastData = [
    { season: 2, episode: 5, episodeTitle: "One More Game" },
    { episode: 118, episodeTitle: "Goodbye TikTok, Ni Hao RedNote? + A.I.'s Environmental Impact + Meta's Masculine Energy"},
    { season: 1 , episode: 1, episodeTitle: "The Fight for True Democracy" }
  ];

  const Podcast = (props) => {
    const podcastStyle = {
        color: "#cceda2",
        fontFamily: "Calibri, sans-serif",
        fontSize: "15px"
    };

    return React.createElement(
        "div",
        { style: podcastStyle, className: "podcast-item" },
        React.createElement(
            "p",
            null,
            props.podcast
                ? props.season
                    ? `Podcast: ${props.podcast}, Season ${props.season}${
                          props.episode ? `, Episode ${props.episode}` : ""
                      }, Title: ${props.episodeTitle}${
                          props.year ? `, Year: ${props.year}` : ""
                      }`
                    : `Podcast: ${props.podcast}${
                          props.episode ? `, Episode ${props.episode}` : ""
                      }, Title: ${props.episodeTitle}${
                          props.year ? `, Year: ${props.year}` : ""
                      }`
                : props.season
                ? `Season ${props.season}${
                      props.episode ? `, Episode ${props.episode}` : ""
                  }, Title: ${props.episodeTitle}${
                      props.year ? `, Year: ${props.year}` : ""
                  }`
                : `${props.episode ? `Episode ${props.episode}, ` : ""}Title: ${
                      props.episodeTitle
                  }${props.year ? `, Year: ${props.year}` : ""}`
        )
    );    
}
  export { podcastData, Podcast };