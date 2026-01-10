import {
  adaptMovieDetail,
  adaptSerieDetail,
} from "../adapter/mediaDetailAdapter";
import type { MediaDetail } from "../domain/mediaDetail";
import { getMovieById, getMovieTrailer } from "./getMovies";
import { getSerieById, getSerieTrailer } from "./getSeries";

export const getMediaDetail = async (
  id: string,
  mediaType: "movie" | "serie"
): Promise<MediaDetail> => {
  if (mediaType === "movie") {
    const movieDTO = await getMovieById(id);
    const trailerKey = await getMovieTrailer(id)
    console.log('test', movieDTO, trailerKey);
    
    return adaptMovieDetail(movieDTO, trailerKey);
  }

  const serieDTO = await getSerieById(id);
  const trailerKey = await getSerieTrailer(id);

  return adaptSerieDetail(serieDTO, trailerKey);
};
