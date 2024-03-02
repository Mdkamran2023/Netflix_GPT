import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import {useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


const Browse = () => {

  const movies= useSelector((store)=>store.movies);
  console.log(movies);
   
  useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
    { movies.popularMovies  && (<SecondaryContainer/>)}
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
