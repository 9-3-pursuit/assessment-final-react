import React, { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import "../movies/Movies.css";
import Movie from "./Movie";

const URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default function Films() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

  const handleFilmSelect = (event) => {
    setSelectedMovieId(event.target.value);
  };

  useEffect(() => {
    fetch(`${URL}/films`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <h1>Select a Movie</h1>

          <select
            className="select"
            name="film-select"
            id="film-select"
            value={selectedMovieId || ""}
            onChange={handleFilmSelect}
          >
            <option value="">Select a movie</option>
            {movies.map((film) => (
              <option key={film.id} value={film.id}>
                {film.title}
              </option>
            ))}
          </select>
          {selectedMovie ? (
            <article className="container card">
              <Movie film={selectedMovie} />
            </article>
          ) : null}
        </>
      )}
    </div>
  );
}
