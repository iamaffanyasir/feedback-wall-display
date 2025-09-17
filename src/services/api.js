import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://your-digitalocean-ip";

export const getLatestFeedbacks = async () => {
  const res = await axios.get(`${API_BASE_URL}/feedback?limit=30`);
  return res.data.data || [];
};
