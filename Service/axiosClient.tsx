import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_URL;
const token = localStorage.getItem("token")
const ultronClient = axios.create({
  baseURL: backendURL,
});

ultronClient.interceptors.request.use(
  function (config) {
    config.headers.Authorization = token
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
ultronClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default ultronClient;
