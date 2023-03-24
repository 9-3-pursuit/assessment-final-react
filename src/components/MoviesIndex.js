import { useEffect, useState } from "react";
import { getAllMovies } from "./fetch";


export default function MoviesIndex () {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);


    useEffect(() => {
        getAllMovies()
        .then((response) => {
            setMovies(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    function handleChange(event) {
        event.preventDefault();


    movies.forEach((movie) => {
        if (movie.title === event.target.value) {
          setSelectedMovie({
            title: movie.title,
            releaseDate: movie.release_date,
            description: movie.description,
          });
        } else if (event.target.value.length === 0) {
          setSelectedMovie({});
        }
      });
    }
      


 return (
        <div className="movies">
          <h3> Select a Movie</h3>
          <select name="Movies" id="movie-select" onChange={handleChange}>
            <option value=""> </option>
            {movies.map((movie) => (
              <option key={movie.title} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
          {selectedMovie.title && (
            <div>
              <h2>
                {" "}
                <span> Title: </span> {selectedMovie.title}{" "}
              </h2>
              <p>
                <span>Release Date: </span> {selectedMovie.releaseDate}
              </p>
              <p>
                <span>Description: </span> {selectedMovie.description}
              </p>
            </div>
          )}
        </div>
      );
};