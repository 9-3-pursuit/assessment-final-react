import { useState, useEffect } from 'react';
import './Movies.css';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const movie = selectedId ? movies.find((movie) => movie.id === selectedId) : null;
    setSelectedMovie(movie);
  };

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select onChange={handleSelectChange} value={selectedMovie ? selectedMovie.id : ''}>
        <option value="">--Select a movie--</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div className="movie-details">
          <h3>{selectedMovie.title}</h3>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>{selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
