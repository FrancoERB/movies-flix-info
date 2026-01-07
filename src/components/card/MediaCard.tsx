import { StarIcon } from "@heroicons/react/24/solid";
import type { Media } from "../../domain/media";
import "../card/cardStyle.css";

interface Props {
  media: Media;
}

export const MediaCard = ({ media }: Props) => {
  return (
    <article
      className="
    group relative w-72 cursor-pointer 
    transition-all duration-500 ease-out
    hover:scale-[1.02] hover:-translate-y-2
  "
      onClick={media.onClick}
    >
      <div className="relative aspect-2/3 overflow-hidden rounded-3xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${media.posterPath}`}
          alt={`${media.title} poster`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="glass-card p-4 transition-all duration-500 group-hover:shadow-glass-hover">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-foreground leading-tight line-clamp-1">
                {media.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {media.releaseDate?.toString()}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <StarIcon className="size-6 text-amber-400" />
                <span className="text-sm font-medium text-[rgb(250_250_250)]">
                  {media.voteAverage}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -inset-4 -z-10 rounded-4xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(--accent) / 0.3), transparent 70%)`,
        }}
      />
    </article>
  );
};
