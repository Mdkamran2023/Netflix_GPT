import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const {
    movieNames,
    movieResults,
    movieNamesFromInput,
    movieResultsFromTMDB,
  } = gpt;
  // if (!movieNames) return null;

  if (!movieNamesFromInput || !movieResultsFromTMDB) {
    return null;
  }

  return (
    <>
      {/* <div className="p-4 m-4 bg-black text-white"> <div>  {movieNames.map((movieName,index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}  /> ))}
      </div>
    </div>  */}

      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          <MovieList
            title={movieNamesFromInput}
            movies={movieResultsFromTMDB}
          />
        </div>
      </div>
    </>
  );
};

export default GptMovieSuggestions;
