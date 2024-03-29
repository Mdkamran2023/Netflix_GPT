import React from "react";
import lang from "../utils/languageConstants";
import { useSelector,useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import Error from "./Error";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult,addMovieFromTMDBDirect} from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();

  // search movie in Tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a movie Recommendation System and some movies for the query " +
      searchText.current.value +
      ".only give me name of 5 movies";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      <Error />;
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.content.splice(","); // making it arrays
    // for each Movie i will search tmdb API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //  i will get array of promises

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));


  };

  const handleGptSearchFromTMDB = async() => {
    const currentValueOfSearchInput = searchText.current.value;
   const movieResultsfromTMDB= await searchMovieTMDB(currentValueOfSearchInput);
   console.log(movieResultsfromTMDB);
   dispatch(addMovieFromTMDBDirect({movieNamesFromInput:currentValueOfSearchInput, movieResultsFromTMDB:movieResultsfromTMDB}));
  };

  return (
    <div className=" pt-[40%] sm:pt-[30%] md:pt-[10%] flex justify-center ">
      <form
        className=" w-full  md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 max-sm:p-2 max-sm:m-2"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4 max-sm:px-2 max-sm:m-2 "
          // onClick={handleGptSearchClick}
          onClick={handleGptSearchFromTMDB}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
