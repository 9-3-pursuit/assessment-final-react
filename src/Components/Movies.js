import React, { useState } from "react";

export default function Movies({ movies }) {
  console.log("test");
  const [selected, setSelected] = useState("");

  function handleMovieChange(event) {
    event.preventDefault();
    setSelected(event.target.value);
  }

  let filterToTitle = movies.filter((movie) => movie.title === selected);

  return (
    <div className="movies">
      <h1>Select A Movie</h1>
      <select onChange={handleMovieChange}>
        <option value=""></option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.title}>
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
