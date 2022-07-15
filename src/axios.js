import axios, { AxiosResponse, AxiosInstance } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-3a4d3/us-central1/api",
});

export default instance;
