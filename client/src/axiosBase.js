import axios from "axios";

const axiosBase = axios.create({
  baseURL: "localhost:8000/",
});

export default axiosBase;
