import type { MediaDetail } from "../domain/mediaDetail";
export interface MovieDetailDTO {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
  genres: { id: number; name: string }[];
}

export interface SerieDetailDTO {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  first_air_date: string;
  genres: { id: number; name: string }[];
}

interface VideoDTO {
  key: string;
  site: string;
  type: string;
  official: boolean;
}

export const adaptMovieDetail = (
  movie: MovieDetailDTO,
  trailerKey: string | null
): MediaDetail => {
  return {
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    overview: movie.overview,
    voteAverage: movie.vote_average,
    year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : null,
    releaseDate: movie.release_date,
    genres: movie.genres,
    mediaType: "movie",
    trailerKey,
  };
};

export const adaptSerieDetail = (
  serie: any,
  trailerKey: string | null
): MediaDetail => ({
  id: serie.id,
  title: serie.name,
  overview: serie.overview,
  posterPath: serie.poster_path,
  backdropPath: serie.backdrop_path,
  voteAverage: serie.vote_average,
  releaseDate: serie.first_air_date,
  genres: serie.genres.map((g: any) => g.name),
  numberOfSeasons: serie.number_of_seasons,
  year: serie.first_air_date,
  trailerKey,
  mediaType: "serie",
});

export const adaptTrailer = (
  videos: VideoDTO[]
) => {
  const trailer = videos.find(
    (v) =>
      v.site === "YouTube" &&
      v.type === "Trailer" &&
      v.official
  ) || videos.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );

  if (!trailer) return undefined;

  return {
    key: trailer.key,
    site: "YouTube" as const,
    official: trailer.official,
  };
};