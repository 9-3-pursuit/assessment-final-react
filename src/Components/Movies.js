// ! URL -> http://localhost:3000/movies
import React, { useState } from "react";

export default function Movies({ movies }) {
  console.log("test");
  const [selected, setSelected] = useState(""); // state for slected movie

  // hnadle movie change as it is clicked --v
  function handleMovieChange(event) {
    event.preventDefault();
    setSelected(event.target.value);
  }

// ? attempt to filter through movie titles --v
   let filterToTitle = movies.filter((movie) => movie.title === selected);

// ? returns the drop down menu but all commented out info is attempts at iterating through the movie data
  return (
    <div className="movies">
      <h1>Select A Movie🍿</h1>
      <select name="Movies" id="movie-select" onChange={handleMovieChange}>
        <option value=""></option>
        {movies.map((movie) => (
          <option key={movie.title} value={movie.title}>
            {movie.title}
          </option>
        ))}
        {filterToTitle.map((movie) => (
          <aside key={movie.id}>
            <h4>
              <strong>Title: </strong> {movie.title}
            </h4>
            <p>
              <strong>Release Date: </strong> {movie.release_date}
            </p>
            <p>
              <strong>Description: </strong> {movie.description}
            </p>
          </aside>
        ))}
      </select>
    </div>
  );
}
