import axios from "axios";

const API = axios.create({
  // baseURL: "http://fpmozcars.studenti.sum.ba/",
  baseURL: "http://localhost:5002/",
});

export default API;
