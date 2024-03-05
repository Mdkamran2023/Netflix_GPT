import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies =()=>{

 // fetch Data from TMDB API and update store 
const dispatch = useDispatch();

const popularMovies=useSelector((store)=>store.movies.popularMovies)

const getPopularMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json.results);
  dispatch(addPopularMovies(json.results))
};

useEffect(() => {
  !popularMovies && getPopularMovies();
}, []);

}


export default usePopularMovies;

