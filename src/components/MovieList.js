import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 max-sm:px-0">
      <h1 className=" text-lg md:text-2xl font-normal py-4 text-white">{title}</h1>
      <div className=" flex whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth overflow-y-hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.original_title}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
