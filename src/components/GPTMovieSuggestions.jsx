import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames|| !movieResults) return null;

  return (
    <div className='px-20'>
      {movieNames.map((name, index) => (
        <MovieList 
          key={name}
          title={name}
          movies={movieResults[index]}
        />
      ))}
    </div>
  )
}

export default GPTMovieSuggestions