import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from '../../requests/api';

const MovieDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchSingleMovie(id).then(movie => {
      console.log(movie)
    })
  }, [id])
  return (
    <div>
        Details
    </div>
  )
}

export default MovieDetails