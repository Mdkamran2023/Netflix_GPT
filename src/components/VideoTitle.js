import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Import the play icon



const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[17%]  px-16 absolute  bg-gradient-to-r from-black'>
   <h1 className='text-4xl font-semibold text-white'> {title}</h1>
   <p className='py-6 text-lg w-1/3 text-white'>{overview}</p>
   <div className=''>
       <button className='bg-white p-2 px-14 mx-2  rounded-md text-xl text-slate-900 hover:bg-opacity-60'><FontAwesomeIcon icon={faPlay} /> Play</button>
       <button className='bg-slate-700 mx-2 text-white p-2 px-14 rounded-md font-medium hover:opacity-60'> <FontAwesomeIcon icon={faInfoCircle}/> More Info</button>
   </div>
    </div>
  )
}

export default VideoTitle;