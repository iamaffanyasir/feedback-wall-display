import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';
const socket = io(SOCKET_URL, { transports: ['websocket'] });

// Keep track of listeners to prevent duplicates
let feedbackListener = null;

export const listenForNewFeedback = (callback) => {
  // Remove any existing listener to prevent duplicates
  if (feedbackListener) {
    socket.off('feedbackSaved', feedbackListener);
  }
  
  // Set new listener
  feedbackListener = callback;
  socket.on('feedbackSaved', feedbackListener);
};
