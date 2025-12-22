import type { MovieCast } from "../../../types/movieCast";
import { CastCard } from "../../card/CastCard";
interface CastCarouselProps {
  cast: MovieCast[];
}

export const CastCarousel = ({ cast }: CastCarouselProps) => {
  if (!cast?.length) return null;

  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold">Reparto</h3>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {cast.slice(0, 10).map((actor) => (
          <CastCard key={actor.id} actor={actor} />
        ))}
      </div>
    </section>
  );
};
