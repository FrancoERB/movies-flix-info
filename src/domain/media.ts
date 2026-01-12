export interface Media {
  id: number;
  title: string;
  posterPath?: string | null;
  overview?: string;
  voteAverage?: number;
  releaseDate?: string;
  cast?: [];
  mediaType: 'movie' | 'serie';
  onClick?: () => void;
}
