import axios from "axios";

// point to your backend URL
// if backend is on localhost:3000
const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default API;
