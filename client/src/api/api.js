import axios from "axios";

const API = axios.create({
  baseURL: "http://fpmozcars.studenti.sum.ba/",
});

export default API;
