import type { MovieCast } from "../../types/movieCast";
interface CastCardProps {
  actor: MovieCast;
}

const IMG_BASE = "https://image.tmdb.org/t/p/w185";

export const CastCard = ({ actor }: CastCardProps) => (
  <div className="w-28 shrink-0 text-center space-y-1">
    <img
      src={
        actor.profile_path
          ? `${IMG_BASE}${actor.profile_path}`
          : "/actor-placeholder.png"
      }
      alt={actor.name}
      className="rounded-lg"
    />
    <p className="text-sm font-medium leading-tight">{actor.name}</p>
    <p className="text-xs text-muted-foreground leading-tight">
      {actor.character}
    </p>
  </div>
);
