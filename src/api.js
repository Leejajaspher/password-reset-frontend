import axios from "axios";

// point to your backend URL
const API = axios.create({
  baseURL: "https://password-reset-mo5v.onrender.com/api"
});

export default API;
