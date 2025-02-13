import axios from "axios";

export const Api = axios.create({
  //baseURL: "",
  baseURL: "http://10.10.10.24:8080",

  headers: {
    "Content-Type": "application/json",
  },
});
