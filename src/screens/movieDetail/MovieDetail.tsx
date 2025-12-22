import {
  ArrowLeftIcon,
  CalendarIcon,
  FilmIcon,
  PlayCircleIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
// import { Play, Plus, Star, Clock, Calendar, Film } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  getMovieById,
  getMovieCredits,
  getMovieTrailer,
} from "../../api/getMovies";
import { CastCarousel } from "../../components/carousel/castCarousel/CastCarousel";
import type { Movie } from "../../types/movie";
import type { MovieCast } from "../../types/movieCast";

export const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const idMovie = Number(id);
  const [movieById, setMovieById] = useState<Movie>();
  const [trailerKey, settrailerKey] = useState<String | null>(null);
  const [movieCast, setMovieCast] = useState<MovieCast[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (idMovie) {
      getMovie();
      getCharacterMovie();
    }
  }, [idMovie]);

  useEffect(() => {
    if (!idMovie) return;
    getMovieTrailer(idMovie).then(settrailerKey);
  }, [idMovie]);

  const getMovie = async () => {
    await getMovieById(idMovie).then((movie) => {
      setMovieById(movie);
    });
  };

  const getCharacterMovie = async () => {
    await getMovieCredits(idMovie).then((cast) => {
      setMovieCast(cast);
    });
  };

  const onClickButtonPlay = () => {
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA]">
      <NavBar />

      {/* Hero backdrop */}
      <div className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: movieById?.backdrop_path
              ? `url(https://image.tmdb.org/t/p/original${movieById.backdrop_path})`
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
                  movieById?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieById.poster_path}`
                    : ""
                }
                alt={movieById?.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F0F0F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Movie Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-[#FAFAFA]">
                {movieById?.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-[#999999]">
                <div className="flex items-center gap-1.5 bg-[#FAFAFA]/20 px-3 py-1.5 rounded-full">
                  <StarIcon className="h-4 w-4 text-[#FAFAFA] fill-[#FAFAFA]" />
                  <span className="font-semibold text-[#FAFAFA]">
                    {movieById?.vote_average}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4" />
                  <p>
                    {movieById?.release_date &&
                      new Date(movieById.release_date).getFullYear()}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <FilmIcon className="h-4 w-4" />
                  {movieById?.genres?.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button onClick={onClickButtonPlay}>
                <PlayCircleIcon
                  className="flex size-10  items-center whitespace-nowrap rounded-full shadow-md shadow-[#3399FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#3399FF]/40 hover:scale-105"
                  title="Reproducir Trailer"
                />
              </button>
              <button className="flex items-center whitespace-nowrap rounded-full border border-[#333333]/40 bg-[#0F0F0F]/20 backdrop-blur-md hover:bg-[#0F0F0F]/40 px-8 py-3 gap-2 transition-all duration-300 hover:scale-105">
                <PlusIcon className="h-5 w-5" />
                Mi Lista
              </button>
            </div>

            {/* Description */}
            <div className="rounded-2xl bg-[#1A1A1A]/30 backdrop-blur-md border border-[#333333]/20 p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#FAFAFA]">Sinopsis</h2>
              <p className="text-[#999999] leading-relaxed">
                {movieById?.overview}
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#1A1A1A]/30 backdrop-blur-md border border-[#333333]/20 p-5">
                <h3 className="text-sm font-medium text-[#999999] mb-2">
                  Reparto Principal
                </h3>
                {movieCast.length > 0 && <CastCarousel cast={movieCast} />}
              </div>
            </div>
          </div>
        </div>

        {/* Trailer Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#FAFAFA] mb-6">Tráiler</h2>
          <div className="rounded-3xl overflow-hidden border border-[#333333]/20 shadow-2xl shadow-[#3399FF]/10 bg-[#1A1A1A]/30 backdrop-blur-md">
            <div className="aspect-video">
              {trailerKey ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <div className="absolute inset-0 w-full h-full">
                    <h1 className="flex text-4xl w-full h-full items-center justify-center">
                      Esta película no tiene trailer disponible :(
                    </h1>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
