import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Components/MoviesData";
import MoviesList from "./Components/MoviesLisit/MoviesList";
import Searchbar from "./Components/Navbar/Searchbar";
import AddMovie from "./Components/AddMovie/AddMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./Components/Movie";
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
    <Router>
      <div className="App">
        <Searchbar
          getSearchRate={getSearchRate}
          getSearchTitle={getSearchTitle}
        />
        <div className="addMovieBtn">
          <AddMovie getNewMovie={getNewMovie} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MoviesList
                movies={movies}
                searchRate={searchRate}
                searchTitle={searchTitle}
              />
            )}
          />
          <Route
            path="/movie/:movieId"
            render={() => <Movie movies={movies} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
