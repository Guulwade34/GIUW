import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/giu-backend/api",
});

export default api;


