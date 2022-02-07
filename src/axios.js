import axios from "axios";

// Base url para peticiones
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
