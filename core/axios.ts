import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use((config) => {
  if (config && typeof window !== "undefined") {
    const { _token } = parseCookies();
    console.log(_token);

    config.headers.Authorization = "Bearer " + _token;
  }

  return config;
});

export default axios;