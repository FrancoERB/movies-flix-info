import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Media } from "../../../domain/media";
import { MediaCard } from "../../card/MediaCard";

interface CategoryCarrouselProps {
  title: string;
  media: Media[];
}

export const CategorysCarousel = ({ title, media }: CategoryCarrouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;

    if (!ref) return;

    ref.addEventListener("scroll", checkScroll);
    return () => ref.removeEventListener("scroll", checkScroll);
  }, [media]);

  const scroll = (direction: "Left" | "Right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "Left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const onClickMedia = (media: Media) => {
    navigate(`/mediaDetail/${media.id}/${media.mediaType}`);
  };

  return (
    <section className="relative group/carousel">
      <div className="container my-6 px-[max(1rem,calc((100vw-1280px)/2+1rem))]">
        <h2 className="text-2xl font-semibold text-[rgb(250_250_250)] tracking-tight">
          {title}
        </h2>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("Left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 
            rounded-r-2xl bg-[rgb(15_15_15)]/80 backdrop-blur-sm 
            border border-[rgb(51_51_51)]/50 border-l-0 transition-all duration-300
            ${
              canScrollLeft
                ? "opacity-0 group-hover/carousel:opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
        >
          <ChevronLeftIcon className="size-8" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 my-10 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4"
        >
          {media.map((item) => (
            <div
              key={item.id}
              className="shrink-0 animate-fade-up"
              onClick={() => onClickMedia(item)}
            >
              <MediaCard media={item} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("Right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 
            rounded-l-2xl bg-bg-[rgb(15_15_15)]/80 backdrop-blur-sm 
            border border-[rgb(51_51_51)]/50 border-r-0 transition-all duration-300
            ${
              canScrollRight
                ? "opacity-0 group-hover/carousel:opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
        >
          <ChevronRightIcon className="size-8" />
        </button>
      </div>
    </section>
  );
};
