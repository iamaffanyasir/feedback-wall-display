import React from "react";
import { motion } from "framer-motion";
import "./LatestFeedbackOverlay.css";

const colorToBg = {
  blue: "/assets/paperbg/paper-blue.png",
  red: "/assets/paperbg/paper-red.png",
  green: "/assets/paperbg/paper-green.png",
  yellow: "/assets/paperbg/paper-yellow.png",
  purple: "/assets/paperbg/paper-purple.png",
};

const LatestFeedbackOverlay = ({ feedback }) => {
  const { name, feedback: text, colorTheme } = feedback;
  const bgImg = colorToBg[colorTheme] || colorToBg.blue;

  return (
    <motion.div
      className="overlay-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="latest-overlay"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="overlay-content">
          <div className="overlay-avatar">
            <span role="img" aria-label="user">
              👤
            </span>
          </div>
          <div className="overlay-text">{text}</div>
          <div className="overlay-name">~{name}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LatestFeedbackOverlay;
