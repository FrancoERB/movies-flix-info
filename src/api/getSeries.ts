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