import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
// 925dc62a
const API_URL = "http://www.omdbapi.com?apikey=925dc62a";
const movie1 = {
  "Title": "Spider-Man: No Way Home",
  "Year": "2021",
  "imdbID": "tt10872600",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
};

const App = () => {
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
  }
  useEffect(() => {
    searchMovies('Spider')
  }, []);


  return (

  <div className="app">

    <h1>Movie App</h1>
    <div className="search">
      <input
      placeholder="Search for movies"
      value="superman"
      onChange={()=>{}}
      />
      <img 
      src={SearchIcon}
      alt="SearchIcon"
      onClick={()=>{}}/>
    </div>
    <div className="container">
      <div className="movie">
        <div>
          <p>{movie1.Year}</p>
        </div>
        <div>
          <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>
    </div>
  </div>
  )
};

export default App;
