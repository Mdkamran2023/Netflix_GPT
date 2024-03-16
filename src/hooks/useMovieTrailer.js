import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch,useSelector } from "react-redux";

 const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();

    const trailerVideo= useSelector((store)=>store.movies.trailerVideo)

    // fetch trailer video && updating the store with trailer video data
    const getMovieVideos = async () => {  
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        console.log(trailer);
      };
      useEffect(() => {
        // api should be called only if it is not already called ---memoization
       !trailerVideo && getMovieVideos();
      }, []);

 }

 export default useMovieTrailer;