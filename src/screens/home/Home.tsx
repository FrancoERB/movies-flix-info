import { CategorysCarousel } from "../../components/carousel/categorysCarousel/CategorysCarousel";
import { HeroCarousel } from "../../components/carousel/herocarousel/HeroCarousel";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/navBar";
import { useHomeMovies } from "../../hooks/useHomeMovies";
import { HeroCarouselSkeleton } from "../skeletons/HeroCarouselSkeleton";
import { HomeMoviesSkeleton } from "../skeletons/HomeMoviesSkeleton";

export const Home = () => {
  const { popular, action, scifi, adventure, horror, mistery, isLoading } =
    useHomeMovies();
  return (
    <section className="min-h-screen bg-[#0F0F0F]">
      {isLoading ? (
        <>
          <HeroCarouselSkeleton />
          <HomeMoviesSkeleton title="Cargando" />
        </>
      ) : (
        <>
          <NavBar />
          <HeroCarousel slides={popular} />
          <CategorysCarousel title="💥 Action" movies={action} />
          <CategorysCarousel title="🚀 Sci-Fi" movies={scifi} />
          <CategorysCarousel title="🚀 Adventure" movies={adventure} />
          <CategorysCarousel title="🚀 Horror" movies={horror} />
          <CategorysCarousel title="🚀 Mistery" movies={mistery} />
          <Footer />
        </>
      )}
    </section>
  );
};
