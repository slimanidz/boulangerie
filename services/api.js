// import config from "@/config.js"

import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
//   // config.api.baseUrl,
// });
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
