import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import FeedbackGrid from './components/FeedbackGrid';
import LatestFeedbackOverlay from './components/LatestFeedbackOverlay';
import { getLatestFeedbacks } from './services/api';
import { listenForNewFeedback } from './services/socket';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [latestFeedback, setLatestFeedback] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const processedFeedbackIds = useRef(new Set());

  useEffect(() => {
    // Fetch initial 30 feedbacks
    getLatestFeedbacks().then(data => {
      setFeedbacks(data);
      // Add all initial feedback IDs to processed set
      data.forEach(feedback => {
        if (feedback.id) {
          processedFeedbackIds.current.add(feedback.id);
        }
      });
    });

    // Listen for new feedback via socket
    listenForNewFeedback((newFeedback) => {
      // Check if we've already processed this feedback
      if (!newFeedback.id || !processedFeedbackIds.current.has(newFeedback.id)) {
        // If new feedback has an ID, add to processed set
        if (newFeedback.id) {
          processedFeedbackIds.current.add(newFeedback.id);
        }
        
        setLatestFeedback(newFeedback);
        setShowOverlay(true);

        // After 5s, hide overlay and update grid
        setTimeout(() => {
          setShowOverlay(false);
          setFeedbacks(prev => [newFeedback, ...prev.slice(0, 29)]);
        }, 5000);
      }
    });
  }, []);

  return (
    <div className="wall-app">
      <h1 className="wall-title">Your Opinion Matters</h1>
      <FeedbackGrid feedbacks={feedbacks} />
      <AnimatePresence>
        {showOverlay && latestFeedback && (
          <LatestFeedbackOverlay feedback={latestFeedback} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
