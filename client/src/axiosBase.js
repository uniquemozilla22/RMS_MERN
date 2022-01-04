import axios from "axios";

const base = "http://192.168.0.105:8000";

const axiosBase = axios.create({
  baseURL: base,
});

export default axiosBase;
