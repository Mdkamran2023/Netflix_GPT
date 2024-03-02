import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 hover:scale-110  hover:cursor-pointer relative hover:rotate-1 '>
      <img alt="Movie Card"
      src={IMG_CDN_URL +posterPath}
      />
    </div>
  )
}

export default MovieCard;