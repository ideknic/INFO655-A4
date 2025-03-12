import React from "react";

const songsData = [
    { title: "Green Light", artist: "Lorde", year: 2017 },
    { title: "Red", artist: "Taylor Swift", year: 2012 },
    { title: "Reminder", artist: "The Weeknd", year: 2016 }
  ];

  const Song = (props) => {
    const songStyle = {
        color: "pink",
        fontFamily: "Calibri, sans-serif",
        fontSize: "15px"
    };

    return React.createElement(
        "div",
        { style: songStyle, className: "song-item" },
        React.createElement(
            "p",
            null,
            props.genre
                ? `${props.title} by ${props.artist}, Release date: ${props.year}, Genre: ${props.genre}`
                : `${props.title} by ${props.artist}, Release date: ${props.year}`
        )
    );
  };

  export { songsData, Song };



