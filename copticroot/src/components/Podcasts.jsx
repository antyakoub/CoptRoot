import React, { useEffect, useState } from "react";
import "../styles/Podcasts.css";

const PodcastBox = ({ title, host, thumbnail, link, smallImage }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="music-link">
      <div className="music-box">
        <div className="music-content">
          <img
            src={thumbnail}
            alt={title}
            className={`music-image ${smallImage ? "small" : ""}`}
          />
        </div>
        <div className="music-info">
          <h2>{title}</h2>
          {host.split(",").map((h, i) => (
            <h3 key={i}>{h.trim()}</h3>
          ))}
        </div>
      </div>
    </a>
  );
};


const PodcastGrid = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("/assets/podcastAssets/podcasts.json")
      .then((res) => res.json())
      .then(setPodcasts)
      .catch(console.error);
  }, []);

  return (
    <div className="podcast-grid">
      {podcasts.map((pod, index) => (
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
