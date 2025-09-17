import React from 'react';
import './FeedbackTile.css';

const colorToBg = {
  blue: '/assets/paperbg/paper-blue.png',
  red: '/assets/paperbg/paper-red.png',
  green: '/assets/paperbg/paper-green.png',
  yellow: '/assets/paperbg/paper-yellow.png',
  purple: '/assets/paperbg/paper-purple.png',
};

const FeedbackTile = ({ feedback }) => {
  const { name, feedback: text, colorTheme } = feedback;
  const bgImg = colorToBg[colorTheme] || colorToBg.blue;

  return (
    <div
      className="feedback-tile"
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
      <div className="tile-avatar">
        <span role="img" aria-label="user">👤</span>
      </div>
      <div className="tile-text">{text}</div>
      <div className="tile-name">~{name}</div>
    </div>
  );
};

export default FeedbackTile;
