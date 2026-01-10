export type MediaType = "movie" | "serie";

export interface MediaDetail {
  id: number;
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
  overview: string;
  voteAverage: number;
  year: number | null;
  genres: { id: number; name: string }[];
  mediaType: MediaType;
  releaseDate?: string
  trailerKey?: string | null;
  numberOfSeasons?: number;
}