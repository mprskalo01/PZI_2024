import axios from "axios";

const API = axios.create({
  baseURL: "https://fpmozcars.onrender.com/",
});

export default API;
