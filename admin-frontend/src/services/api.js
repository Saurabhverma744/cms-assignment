import axios from "axios";

const api = axios.create({
  baseURL: "https://saurabh-cms-backend.onrender.com/api",
});

export default api;
