import React, { useEffect, useState } from "react";
import { Song, songsData } from "./Song";
import { Podcast, podcastData } from "./Podcast";
import ShuffleButton from "./Shuffle";
import PlayPauseButton from "./PlayPause";
import PrevButton from "./Previous";
import NextButton from "./Next";
import Status from "./StatusDisplay";

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState("Paused");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = [];

      for (let i = 0; i <= 14; i++) {
        const response = await fetch(`http://localhost:3001/${i}`);
        const data = await response.json();
        fetchedItems.push(data);
      }

      setPlaylist([...songsData, ...podcastData, ...fetchedItems]);
    };

    fetchData();
  }, []);

  const updateStatus = (index, playing) => {
    const track = playlist[index];
  
    if (!track) {
      setStatus("Paused");
      return;
    }
  
    let trackInfo = "Paused";
    if (playing) {
      if (track.artist) {
        trackInfo = `Playing: ${track.title} - ${track.artist}`;
      } else if (track.episodeTitle) {
        trackInfo = `Playing: ${track.episodeTitle}`;
      }
    }
  
    setStatus(trackInfo);
  };
  const shufflePlaylist = () => {
    setPlaylist((prevPlaylist) => shuffleArray([...prevPlaylist]));
  };

  const playPause = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      updateStatus(currentIndex, newState);
      return newState;
    });
  };

  const prevTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : playlist.length - 1;
      setIsPlaying(true);
      updateStatus(newIndex, true);
      return newIndex;
    });
  };

  const nextTrack = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev < playlist.length - 1 ? prev + 1 : 0;
      setIsPlaying(true);
      updateStatus(newIndex, true);
      return newIndex;
    });
  };

  const handleDoubleClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    updateStatus(index, true);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Status, { status }),
    React.createElement("h3", null),
    React.createElement(
      "div",
      { className: "controls" },
      React.createElement(PrevButton, { prevTrack }),
      React.createElement(PlayPauseButton, { isPlaying, playPause }),
      React.createElement(NextButton, { nextTrack }),
      React.createElement(ShuffleButton, { shufflePlaylist })
    ),
    ...playlist.map((item, index) =>
      React.createElement(
        "div",
        {
          key: index,
          className: index === currentIndex ? "active-track" : "",
          onDoubleClick: () => handleDoubleClick(index),
        },
        React.createElement(item.artist ? Song : Podcast, { ...item })
      )
    )
  );
};

export default Playlist;