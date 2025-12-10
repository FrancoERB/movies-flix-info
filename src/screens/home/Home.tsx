import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
// import { getPopularMovies } from "../../api/getMovies";
// import type { Movie } from "../../types/movie";
import { CategorysCarousel } from "../../components/carousel/categorysCarousel/CategorysCarousel";

import { getMoviesByGenre } from "../../api/getMovies";
import { HeroCarousel } from "../../components/carousel/herocarousel/HeroCarousel";
import { NavBar } from "../../components/navBar/navBar";
import { heroSlides } from "../../mockData/carouselInfo";

export const Home = () => {
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [sciFiMovies, setSciFiMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByGenre(28).then(setActionMovies);
    getMoviesByGenre(878).then(setSciFiMovies);
  }, []);

  return (
    <section className="w-full items-cente bg-[#0F0F0F]">
      <NavBar />
      <HeroCarousel slides={heroSlides} />
      <CategorysCarousel title="💥 Action" movies={actionMovies} />
      <CategorysCarousel title="🚀 Sci-Fi" movies={sciFiMovies} />
    </section>
  );
};
