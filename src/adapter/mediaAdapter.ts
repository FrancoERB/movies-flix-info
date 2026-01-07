import type { Media } from "../domain/media";

export interface MovieDTO {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface SerieDTO {
  id: number;
  name: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  first_air_date: string;
}

export const adaptMoviesToMedia = (movies: MovieDTO[]): Media[] => {
  return movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    overview: movie.overview,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    mediaType: "movie",
  }));
};

export const adaptSeriesToMedia = (tvSeries: SerieDTO[]): Media[] => {
  return tvSeries.map((tv) => ({
    id: tv.id,
    title: tv.name,
    posterPath: tv.poster_path,
    overview: tv.overview,
    voteAverage: tv.vote_average,
    releaseDate: tv.first_air_date,
    mediaType: "serie",
  }));
};
