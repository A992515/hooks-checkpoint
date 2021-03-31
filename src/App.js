import React, { useState } from "react";
import './App.css';
import { moviesData } from './Components/MoviesData';
import MovieList from "./Components/MoviesLisit/MoviesList";
import Searchbar from "./Components/Navbar/Searchbar";
import AddMovie from "./Components/AddMovie/AddMovie"
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");

  const getSearchRate = (input) => {
    setSearchRate(input);
  };

  const getSearchTitle = (input) => {
    setSearchTitle(input);
  };

  const getNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <Searchbar getSearchRate={getSearchRate} getSearchTitle={getSearchTitle} />
      <div className="addMovieBtn">
        <AddMovie getNewMovie={getNewMovie} />
      </div>
      <MovieList
        movies={movies}
        searchRate={searchRate}
        searchTitle={searchTitle}
      />
    </div>
  );
}

export default App;
