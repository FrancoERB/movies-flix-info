import type { Movie } from "../types/movie";
import { api } from "./axiosConfig";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

export const getMoviesByGenre = async (genreId: number) : Promise<Movie[]> => {
  const res = await api.get(`/discover/movie?with_genres=${genreId}`)
  return res.data.results;
}
