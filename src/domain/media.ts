export type MediaType = "movie" | "serie";

export interface Media {
  id: number;
  title: string;
  posterPath?: string | null;
  overview?: string;
  voteAverage?: number;
  releaseDate?: string;
  mediaType?: MediaType;
  onClick?: () => void;
}
