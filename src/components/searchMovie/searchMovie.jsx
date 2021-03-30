import React from "react";
import "./searchMovie.css"
import ReactStars from 'react-stars'

export const SearchMovie = ({
  setNameSearch,
  setRatingSearch,
}) => {
  return (
    <div className="search">
      <ReactStars count={5} size={24} onChange={setRatingSearch} half={false} edit={true} color2={'#FFFFFF'} />
      <div>
        <form action="" autoComplete="on">
          <input
            className="input-search"
            name="search"
            type="text"
            placeholder="What're we looking for ?"
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
