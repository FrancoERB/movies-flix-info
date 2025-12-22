export const HeroCarouselSkeleton = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden animate-pulse">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900" />

      <div className="absolute inset-0 bg-linear-to-r from-[rgb(15_15_15)] via-[rgb(15_15_15)]/80 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[rgb(15_15_15)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Meta info */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-24 rounded bg-neutral-700" />
            <div className="h-4 w-16 rounded bg-neutral-700" />
          </div>

          {/* Title */}
          <div className="h-14 md:h-20 w-3/4 rounded bg-neutral-700" />

          {/* Overview */}
          <div className="space-y-3 max-w-xl">
            <div className="h-4 w-full rounded bg-neutral-800" />
            <div className="h-4 w-5/6 rounded bg-neutral-800" />
            <div className="h-4 w-4/6 rounded bg-neutral-800" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <div className="h-12 w-40 rounded-full bg-neutral-700" />
            <div className="h-12 w-40 rounded-full bg-neutral-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
