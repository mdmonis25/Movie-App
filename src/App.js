import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
// 925dc62a
const API_URL = "http://www.omdbapi.com?apikey=925dc62a";
const App = () => {
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
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
  </div>
  )
};

export default App;
