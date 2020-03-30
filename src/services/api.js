import axios from "axios";

const api = axios.create({ baseURL: "hps-backend.herokuapp.com" });

export default api;
