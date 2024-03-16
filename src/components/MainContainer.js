import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  let index = Math.floor(Math.random() * 20);
  const mainMovie = movies[index];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[33%] sm:pt-[28%] bg-gray-900 md:bg-transparent md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import VideoTitle from './VideoTitle';
// import VideoBackground from './VideoBackground';

// const MainContainer = () => {
//   const movies = useSelector(store => store.movies?.nowPlayingMovies);
//   const [index, setIndex] = useState(null);

//   useEffect(() => {
//     if (movies && movies.length > 0) {
//       setIndex(Math.floor(Math.random() * movies.length));
//     }
//   }, [movies]);

//   if (movies === null || index === null) return null;

//   const mainMovie = movies[index];
//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div className='pt-[33%] sm:pt-[28%] bg-gray-900 md:bg-transparent md:pt-0'>
//       <VideoTitle title={original_title} overview={overview} />
//       <VideoBackground movieId={id} />
//     </div>
//   );
// };

// export default MainContainer;
