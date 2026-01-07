import { useHomeSeries } from "../../hooks/useHomeSeries";
// import { CategorysCarousel } from "../../components/carousel/categorysCarousel/CategorysCarousel";
import { CategorysCarousel } from "../../components/carousel/categorysCarousel/CategorysCarousel";
import { HeroCarousel } from "../../components/carousel/herocarousel/HeroCarousel";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/navBar";

export const Series = () => {
  const { popular, airingToDay, onTheAir, topRated } = useHomeSeries();

  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-[#0F0F0F]">
        <HeroCarousel slides={popular} />
        <CategorysCarousel media={airingToDay} title="Polulares Hoy" />
        <CategorysCarousel media={onTheAir} title="Nuevos Episodios" />
        <CategorysCarousel media={topRated} title="Top Rated" />
      </section>
      <Footer />
    </>
  );
};
