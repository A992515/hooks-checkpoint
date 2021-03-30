import React, { useState } from "react";
import "./App.css";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { SearchMovie } from "./components/searchMovie/searchMovie";
import {moviesData} from "./components/Moviesdata";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Movie } from "./components/Movie/Movie";
import { Route, Router, Switch } from 'react-router-dom'

const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");

  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    
    <div className="container">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
  
      <MoviesList
        moviesList={moviesList}
        ratingSearch={ratingSearch}
        nameSearch={nameSearch}
      />
      <div className="addmovie">
        <AddMovie addMovie={addMovie} />
      </div>
      
    </div>
  );
};

export default App;
