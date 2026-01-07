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
          <HomeMoviesSkeleton />
        </>
      ) : (
        <>
          <NavBar />
          <HeroCarousel slides={popular} />
          <CategorysCarousel title="💥 Accion" media={action} />
          <CategorysCarousel title="👽 Ciencia Ficcion" media={scifi} />
          <CategorysCarousel title="🏔️ Aventura" media={adventure} />
          <CategorysCarousel title="😱 Terror" media={horror} />
          <CategorysCarousel title="🕵 Misterio" media={mistery} />
          <Footer />
        </>
      )}
    </section>
  );
};
