import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import usePopularMovies from "../hooks/usePopularMovies";
// import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // useNowPlayingMovies();
  // usePopularMovies();
  // useUpcomingMovies();
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" w-screen bg-black ">
        {/* 
      MovieList-Popular
          MovieCard*N
      MovieList-NowPlaying
      MovieList-Trending
      MovieList- Horror
      */}
        <div className="-mt-52  pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          movies.popularMovies &&(
          <MovieList title={"Popular"} movies={movies.popularMovies} />)
          movies.upcomingMovies && (
          <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
          )
          <MovieList title={"Sci-fi"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
