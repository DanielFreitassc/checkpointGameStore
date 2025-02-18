import axios from "axios";

export const Api = axios.create({
  //baseURL: "",
  baseURL: "http://localhost:8080",

  headers: {
    "Content-Type": "application/json",
  },
});
