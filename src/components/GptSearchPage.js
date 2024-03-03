import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL_SEARCH } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      {/*
       Gpt Search Bar 
      Gpt Movie Suggestion
      */}
      <div className="absolute -z-30 ">
        <img
          className=""
          alt="Logo"
          src={BG_URL_SEARCH}
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
