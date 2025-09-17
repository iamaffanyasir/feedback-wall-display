import React from 'react';
import FeedbackTile from './FeedbackTile';
import './FeedbackGrid.css';

const FeedbackGrid = ({ feedbacks }) => (
  <div className="feedback-grid">
    {feedbacks.map((fb, idx) => (
      <FeedbackTile key={fb.id || idx} feedback={fb} />
    ))}
  </div>
);

export default FeedbackGrid;
