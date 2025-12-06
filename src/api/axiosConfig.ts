import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
    language: "es-ES",
  },
});