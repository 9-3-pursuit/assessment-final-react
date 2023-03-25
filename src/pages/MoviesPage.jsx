import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"



export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("")

  function getMovies() {
    return fetch(`${baseURL}/films`).then((response) => response.json());
  }

  function getSelectedMovieId (e){
    setSelectedMovieId(e.target.value);
  }

  useEffect(() => {
    getMovies()
      .then((films) => {
        setMovies([...films]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="movies">
      <h1>Select a Movie</h1>
      {/* <select name="movies" id="movie-select"> */}
        <select 
            name="movies"
            id="movie-select"
            onChange={(e) => getSelectedMovieId(e)}
            >
        <option value="movie-title"></option>
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>

      {selectedMovieId ? (
        <MovieCard movieId={selectedMovieId} movies={movies} />
      
      ) : null}
    </section>
  );
}