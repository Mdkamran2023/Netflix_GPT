import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL_SEARCH } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-30 w-screen">
        <img
          className="h-screen w-screen object-cover"
          alt="Logo"
          src={BG_URL_SEARCH}
        ></img>
      </div>
    <div className="">
      {/*
       Gpt Search Bar 
      Gpt Movie Suggestion
      */}
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearchPage;
