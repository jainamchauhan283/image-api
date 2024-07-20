import axios from "axios";

const unsplash = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
});

export default unsplash;
