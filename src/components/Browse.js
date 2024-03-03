import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
// import toggleGptSearchView from "../utils/gptSlice"

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const movies = useSelector((store) => store.movies);
  console.log(movies);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage/>
      ) : (
        <>
          <MainContainer />
          {movies.popularMovies && movies.upcomingMovies && (
            <SecondaryContainer />
          )}
        </>
      )}

      {/*
      Maincontainer
         - VideoBackground
         - VideoTitle
      SecondaryContainer
         - MovieList*N
            - cards*N
       */}
    </div>
  );
};

export default Browse;
