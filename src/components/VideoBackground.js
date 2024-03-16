import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

// fetch trailer video
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const mute = useSelector((store) => store.video.mute);
  //  console.log(mute);
  return (
    <div className="w-screen">
      <iframe
        className=" aspect-video w-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=aG1aezpeQ6c5h1__?&autoplay=1&loop=1&mute=" +
          (mute ? "1" : "0")
        }
        title="YouTube video player"
        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
