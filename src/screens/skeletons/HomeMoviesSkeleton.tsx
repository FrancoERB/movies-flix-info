import { MovieCardSkeleton } from "./MovieCardSkeleton";
type MovieCarouselSkeletonProps = {
  title?: string;
};

export const HomeMoviesSkeleton = ({ title }: MovieCarouselSkeletonProps) => {
  return (
    <section className="relative">
      {/* Title */}
      <div className="container my-6 px-[max(1rem,calc((100vw-1280px)/2+1rem))]">
        <div className="h-7 w-48 rounded bg-neutral-800 animate-pulse" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex gap-4 my-10 overflow-x-hidden px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="shrink-0">
              <MovieCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
