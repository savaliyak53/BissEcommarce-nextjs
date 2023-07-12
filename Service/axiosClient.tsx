import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_URL;

const ultronClient = axios.create({
  baseURL: backendURL,
});

export default ultronClient;
