import axios from "axios";

const base = "http://localhost:8000";

const axiosBase = axios.create({
  baseURL: base,
});

export default axiosBase;
