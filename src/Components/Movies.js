// "select a movie" with drop down select
// select options populated by api fetch call (assesment prep for reference)
// use useEffect to rerender only when selection changes
// figure out why fetch call won't work (console log/postman)
// upon select api data for title, release date & description should be displayed
// when empty selection box is chosen, info should disappear (ternary)
import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  // our data will return an array
  const [selectedMovie, setSelectedMovie] = useState(null);
  const URL = `https://resource-ghibli-api.onrender.com/films`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  });
  function handleSelectChange(event) {
    setSelectedMovie(movies.find((movie) => movie.id === event.target.value));
  }
  return (
    <div className=".movies">
      <h2>Select a Movie</h2>
      <select
        style={{ textAlignVertical: "center", textAlign: "center" }}
        onChange={handleSelectChange}
      >
        <option value=""></option>
        {/* // empty option do not remove need to pass test*/}
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>

      {!selectedMovie ? null : (
        <div style={{ textAlignVertical: "center", textAlign: "center" }}>
          <h1>Title: {selectedMovie.title} </h1>
          <h3>Release Date: {selectedMovie.release_date} </h3>
          <p className="description">
            <span>Description:</span> {selectedMovie.description}
          </p>{" "}
        </div>
      )}
    </div>
  );
}
