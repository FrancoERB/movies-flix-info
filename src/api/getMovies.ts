import type { Movie } from "../types/movie";
import { api } from "./axiosConfig";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await api.get("/movie/popular");
  console.log(res.data.results[0].poster_path)
  return res.data.results;
};