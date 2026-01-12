import {
  ArrowLeftIcon,
  CalendarIcon,
  FilmIcon,
  PlayCircleIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMediaDetail } from "../../api/getMovieDetail";
import { getMovieCredits } from "../../api/getMovies";
import { CastCarousel } from "../../components/carousel/castCarousel/CastCarousel";
import { NavBar } from "../../components/navBar/navBar";
import type { MediaDetail } from "../../domain/mediaDetail";

export const MediaDetailPage = () => {
  const { id, mediaType } = useParams<{
    id: string;
    mediaType: "movie" | "serie";
  }>();

  const navigate = useNavigate();
  const [media, setMedia] = useState<MediaDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    if (!id || !mediaType) return;
    setLoading(true);

    getMediaDetail(id, mediaType)
      .then(setMedia)
      .finally(() => setLoading(false));
  }, [id, mediaType]);

  useEffect(() => {
    if (!id) return;
    if (mediaType !== "movie" && mediaType !== "serie") return;

    getMovieCredits(Number(id), mediaType).then(setCredits);
  }, [id, mediaType]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white">
        <NavBar />
        <p className="p-10">Cargando…</p>
      </div>
    );
  }

  if (!media) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white">
        <NavBar />
        <p className="p-10">Contenido no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA]">
      <NavBar />

      {/* Hero backdrop */}
      <div className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: media.backdropPath
              ? `url(https://image.tmdb.org/t/p/original${media.backdropPath})`
              : "none",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0F0F0F]/80 via-transparent to-transparent" />

        {/* Back button */}
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="absolute size-10 top-20 left-6 z-10 rounded-full p-2 bg-transparent backdrop-blur-md border border-[#333333]/50 hover:bg-[#0f0f0f]/50 transition-all duration-300" />
        </button>
      </div>

      {/* Content */}
      <div className="relative -mt-64 z-10 px-6 md:px-12 lg:px-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Poster Card */}
          <div className="shrink-0">
            <div className="relative w-64 md:w-80 rounded-3xl overflow-hidden shadow-2xl shadow-[#3399FF]/20 border border-[#333333]/20 group">
              <img
                src={
                  media.posterPath
                    ? `https://image.tmdb.org/t/p/w500${media.posterPath}`
                    : ""
                }
                alt={media.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F0F0F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {media.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-[#999999]">
                <div className="flex items-center gap-1.5 bg-[#FAFAFA]/20 px-3 py-1.5 rounded-full">
                  <StarIcon className="h-4 w-4 fill-[#FAFAFA]" />
                  <span className="font-semibold text-[#FAFAFA]">
                    {media.voteAverage}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4" />
                  <p>{media.year}</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <FilmIcon className="h-4 w-4" />
                  {media.genres?.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.scrollTo({ top: 1300, behavior: "smooth" })
                }
              >
                <PlayCircleIcon className="size-10 rounded-full shadow-md shadow-[#3399FF]/30 hover:scale-105 transition-all" />
              </button>

              <button className="flex items-center rounded-full border border-[#333333]/40 bg-[#0F0F0F]/20 backdrop-blur-md hover:bg-[#0F0F0F]/40 px-8 py-3 gap-2 transition-all hover:scale-105">
                <PlusIcon className="h-5 w-5" />
                Mi Lista
              </button>
            </div>

            {/* Description */}
            <div className="rounded-2xl bg-[#1A1A1A]/30 backdrop-blur-md border border-[#333333]/20 p-6">
              <h2 className="text-xl font-semibold mb-2">Sinopsis</h2>
              <p className="text-[#999999] leading-relaxed">{media.overview}</p>
            </div>

            {/* Cast */}
            {credits.length > 0 && (
              <div className="rounded-2xl bg-[#1A1A1A]/30 backdrop-blur-md border border-[#333333]/20 p-5">
                <h3 className="text-sm font-medium text-[#999999] mb-2">
                  Reparto Principal
                </h3>
                <CastCarousel cast={credits} />
              </div>
            )}
          </div>
        </div>

        {/* Trailer */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Tráiler</h2>
          <div className="rounded-3xl overflow-hidden border border-[#333333]/20 shadow-2xl bg-[#1A1A1A]/30">
            <div className="aspect-video relative">
              {media.trailerKey ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${media.trailerKey}`}
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-3xl text-center">
                    Este contenido no tiene tráiler disponible :(
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
