import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 hover:scale-x-110 hover:scale-y-110 hover:cursor-pointer relative'>
      <img className='w-[100%]' alt="Movie Card"
      src={IMG_CDN_URL +posterPath}
      />
    </div>
  )
}

export default MovieCard;