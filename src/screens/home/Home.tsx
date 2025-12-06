import { useEffect, useState } from "react";
import { getPopularMovies } from "../../api/getMovies";
import { MovieCard } from "../../components/card/MovieCard";
import type { Movie } from "../../types/movie";

export const Home = () => {
  const [movies, setmovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(setmovies).catch(console.error);
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-6 px-2">
        Películas recomendadas
      </h2>

      <div
        className="
          grid 
          grid-cols-2
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-6 
          gap-6 
          px-2
        "
      >
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            popularity={movie.popularity}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};
