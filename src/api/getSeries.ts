import type { SerieDTO } from "../adapter/mediaAdapter";
import { api } from "./axiosConfig";

export const getPopularSeries = async (): Promise<SerieDTO[]> => {
  const res = await api.get("/tv/popular");
  return res.data.results;
};

export const getSeriesAiringToDay = async(): Promise<SerieDTO[]> => {
  const res = await api.get("/tv/airing_today");
  return res.data.results;
}

export const getSeriesOnTheAir = async(): Promise<SerieDTO[]> => {
  const res = await api.get("/tv/on_the_air");
  return res.data.results;
}

export const getSeriesTopRated = async(): Promise<SerieDTO[]> => {
  const res = await api.get("/tv/top_rated");
  return res.data.results;
}

export const getSerieById = async (id: string) => {
  const res = await api.get(`/tv/${id}`);
  return res.data;
};

export const getSerieTrailer = async (
  id: string
): Promise<string | null> => {
  const res = await api.get(`/tv/${id}/videos`);

  const trailer = res.data.results.find(
    (v: any) => v.type === "Trailer" && v.site === "YouTube"
  );

  return trailer ? trailer.key : null;
};