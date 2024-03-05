import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState :{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
        movieNamesFromInput:null,
        movieResultsFromTMDB:null
    },
    reducers:{
        toggleGptSearchView :(state,action) =>{
           state.showGptSearch =!state.showGptSearch;
        },
        addGptMovieResult :(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
        addMovieFromTMDBDirect:(state,action)=>{
            const{movieNamesFromInput, movieResultsFromTMDB}=action.payload;
             state.movieNamesFromInput=movieNamesFromInput;
            state.movieResultsFromTMDB=movieResultsFromTMDB;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult,addMovieFromTMDBDirect}=gptSlice.actions;

export default gptSlice.reducer; 