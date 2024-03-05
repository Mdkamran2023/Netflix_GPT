import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath, title, releaseDate, overview }) => {
  const [isShown, setIsShown] = useState(false);
  // const [hasRendered, setHasRendered] = useState(false);

  const handleMouseEnter = () => {
    // if (!hasRendered) {
      setIsShown(true);
      // setHasRendered(true);
    // }
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div className='relative' onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    >
      <div className='w-48 pr-4 hover:scale-x-110 hover:scale-y-110 hover:cursor-pointer relative z-20'>
        <img
          className='w-[100%] h-full'
          alt='Movie Card'
          src={posterPath ? IMG_CDN_URL + posterPath : 'https://images.unsplash.com/photo-1559108318-39ed452bb6c9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        />
      </div>
      {isShown && (
        <div className='absolute bottom-0 left-0 bg-black bg-opacity-80 text-white w-full h-full flex items-center justify-center z-50'>
          <div className=' p-3 text-start flex flex-col bg-transparent w-full h-full relative justify-start overflow-scroll no-scrollbar'>
            <h1 className='text-xl font-bold whitespace-pre-line'>Movie Name : {title}</h1>
            <p className='font-semibold  whitespace-pre-line'>Realease Date : {releaseDate}</p>
            <p className='font-normal  whitespace-pre-line'> Overview : {overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;

