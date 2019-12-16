import React, { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import { useParams } from 'react-router-dom';

import axios from 'axios';


const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  console.log(id)
  
  useEffect(() => {
    
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard
      title={title}
      director={director}
      metascore={metascore}
      stars={stars}
      />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
