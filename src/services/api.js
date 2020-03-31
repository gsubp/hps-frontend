import axios from "axios";

const api = axios.create({ baseURL: "https://hps-backend.herokuapp.com/" });

export default api;
