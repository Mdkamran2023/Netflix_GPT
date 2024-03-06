import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; // Import the play icon
import { useDispatch } from "react-redux";
import { unmuteAudio } from "../utils/videoSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const videoPlay = () => {
    dispatch(unmuteAudio());
  };

  return (
    <div className="w-screen aspect-video pt-[15%]  lg:mt-5 xl:mt-0 px-6 md:px-16 absolute  bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
        {title}
      </h1>
      <p className=" hidden lg:inline-block  py-6 text-lg w-1/3 text-white">
        {overview}
      </p>
      <div className="my-2 xl:my-0">
        <button
          className="bg-white py-1 md:py-1 lg:py-2 px-3 md:px-10 lg:px-14 mx-0 md:mx-2 my-2 md:my-0  rounded-md  text-slate-900 hover:bg-opacity-60 text-sm sm:text-md md:text-xl max-md:mx-2"
          onClick={videoPlay}
        >
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className=" bg-slate-700  text-white py-1 md:py-1 lg:py-2 px-3 md:px-10 lg:px-14 mx-0 md:mx-2 my-2 md:my-0 rounded-md font-medium hover:opacity-60 text-sm sm:text-md md:text-xl">
          {" "}
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
