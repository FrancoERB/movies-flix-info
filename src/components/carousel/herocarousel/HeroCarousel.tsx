import {
  ArrowLeftIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroSlide {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date?: Date;
  popularity?: number;
  onClick?: () => void;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const onClickMovieId = (id: number) => {
    navigate(`/movieDetail/${id}`);
  };

  const onClickButtonPlay = (id: number) => {
    navigate(`/movieDetail/${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }, 300);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-linear-to-r from-[rgb(15_15_15)] via-[rgb(15_15_15)]/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[rgb(15_15_15)] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full w-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3 text-sm text-[rgb(153_153_153)]">
                <span>
                  {slide.release_date
                    ? new Date(slide.release_date).toLocaleDateString("es-AR")
                    : "Sin fecha"}
                </span>

                <span className="flex items-center gap-1">
                  <span className="text-[rgb(255_198_26)]">★</span>
                  {slide.popularity}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-[rgb(250_250_250)] tracking-tight leading-none">
                {slide.title}
              </h1>

              <p className="text-lg text-[rgb(250_250_250)] line-clamp-3 max-w-xl">
                {slide.overview}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  className="rounded-full flex px-8  py-3 gap-2 bg-[rgb(250_250_250)] hover:bg-[rgb(250_250_250)]/50 text-[rgb(15_15_15)]"
                  onClick={() => onClickButtonPlay(slide.id)}
                >
                  <PlayIcon className="size-6" />
                  Reproducir
                </button>
                <button
                  className="rounded-full flex text-white px-8 py-3 gap-2 border-[rgb(51_51_51)]/50 bg-[rgb(36_36_36)] backdrop-blur-sm hover:bg-[rgb(36_36_36)]/50"
                  onClick={() => {
                    onClickMovieId(slide.id);
                  }}
                >
                  <InformationCircleIcon className="size-6" />
                  Más info
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-700 opacity-10 hover:opacity-100 transition-opacity"
      >
        <ArrowLeftIcon className="size-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-700 opacity-10 hover:opacity-100 transition-opacity"
      >
        <ArrowRightIcon className="size-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[rgb(250_250_250)]"
                : "w-1.5 bg-[rgb(153_153_153)]/50 hover:bg-[rgb(153_153_153)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
