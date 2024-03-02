import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../utils/moviesSlice";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies =()=>{

 // fetch Data from TMDB API and update store 
const dispatch = useDispatch();

const getUpcomingMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json.results);
  dispatch(addUpcomingMovies(json.results))
};

useEffect(() => {
  getUpcomingMovies();
}, []);

}


export default useUpcomingMovies;

