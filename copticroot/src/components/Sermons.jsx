// SermonPage.jsx

import React from "react";
import "../styles/Sermons.css";

const sermons = [
  {
    title: "Fr. Mike Schmitz",
    channel: "Ascension Presents",
    link: "https://www.youtube.com/@AscensionPresents",
    thumbnail: "/images/ascension.jpg"
  },
  {
    title: "Bishop Barron",
    channel: "Word on Fire",
    link: "https://www.youtube.com/@bishoprobertbarron",
    thumbnail: "/images/wordonfire.jpg"
  },
  {
    title: "Catholic Answers",
    channel: "Catholic Answers",
    link: "https://www.youtube.com/@catholiccom",
    thumbnail: "/images/catholicanswers.jpg"
  }
];

const SermonCard = ({ title, channel, link, thumbnail }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="sermon-card">
    <img src={thumbnail} alt={channel} className="sermon-thumb" />
    <div className="sermon-info">
      <h2>{title}</h2>
      <h3>{channel}</h3>
    </div>
  </a>
);

const SermonPage = () => (
  <div className="sermon-grid">
    {sermons.map((sermon, i) => (
      <SermonCard key={i} {...sermon} />
    ))}
  </div>
);

export default SermonPage;
