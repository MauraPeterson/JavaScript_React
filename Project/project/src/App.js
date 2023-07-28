import React, { useEffect } from 'react';

import './App.css'
import SearchIcon from './search.svg'

//fcc487c6

const movie1 = {
  "Title": "Ponyo",
  "Year": "2008",
  "imdbID": "tt0876563",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg"
}

const API_URL = 'http://www.omdbapi.com?apikey=fcc487c6';

const App = () =>{

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Ponyo');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value='Ponyo'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>
      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//56:28
