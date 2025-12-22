export const MovieCardSkeleton = () => {
  return (
    <div className="w-160px md:w-[200px] animate-pulse">
      <div className="aspect-2/3 rounded-2xl bg-neutral-800" />

      <div className="mt-3 space-y-2">
        <div className="h-4 w-4/5 rounded bg-neutral-700" />
        <div className="h-3 w-2/3 rounded bg-neutral-700" />
        <div className="h-3 w-1/2 rounded bg-neutral-700" />
      </div>
    </div>
  );
};
