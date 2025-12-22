import type { Movie } from "../types/movie";
import { api } from "./axiosConfig";

type MovieVideo = {
  key: string;
  site: string;
  type: string;
  official: boolean;
  iso_639_1: string;
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

export const getMoviesByGenre = async (genreId: number) : Promise<Movie[]> => {
  const res = await api.get(`/discover/movie?with_genres=${genreId}`)
  return res.data.results;
}

export const getMovieById = async (id : string | number ) => {
  const res = await api.get(`/movie/${id}?language=es-ES`)
  return res.data
}

export const getMovieTrailer = async (movieId : number) : Promise<String | null > => {
  const res = await api.get(`/movie/${movieId}/videos?language=es-ES`)
  if (!res) return null;
  const videos: MovieVideo[] = res.data.results;
  //Filter for get trailers in Spanish, Inglish or any
  let trailer =
    videos.find(
      (v) =>
        v.site === "YouTube" &&
        v.type === "Trailer" &&
        v.official &&
        v.iso_639_1 === "es"
    ) ||
 
    videos.find(
      (v) =>
        v.site === "YouTube" &&
        v.type === "Trailer" &&
        v.official
    ) ||

    videos.find(
      (v) =>
        v.site === "YouTube" &&
        v.type === "Trailer"
    );

  return trailer ? trailer.key : null;
}

export const getMovieCredits = async (movieId: number) => {
  const res = await api.get(`/movie/${movieId}/credits?language=es-ES`);
  return res.data.cast;
};