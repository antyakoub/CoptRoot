// PodcastGrid.jsx

import React from "react";
import podcastData from "../assets/data/podcasts";
import "../styles/Podcasts.css";

const PodcastBox = ({ title, host, thumbnail, link }) => {
  return (
    <div className="music-box">
      <div className="music-content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} className="music-image" />
        </a>
      </div>
      <div className="music-info">
        <h2>{title}</h2>
        <h3>{host}</h3>
      </div>
    </div>
  );
};

const PodcastGrid = () => {
  return (
    <div className="podcast-grid">
      {podcastData.map((pod, index) => (
        <PodcastBox
          key={index}
          title={pod.title}
          host={pod.host}
          thumbnail={pod.thumbnail}
          link={pod.link}
        />
      ))}
    </div>
  );
};

export default PodcastGrid;
