import { useState, useEffect } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://resource-ghibli-api-pursuit.onrender.com/films');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleSelect = (event) => {
    const selectedId = event.target.value;
    const selected = movies.find((movie) => movie.id === selectedId);
    setSelectedMovie(selected);
  };

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select name="movie" id="movie" onChange={handleSelect}>
        <option value="">-- Select a movie --</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div className="movie-details">
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.description}</p>
          <p>Release date: {selectedMovie.release_date}</p>
        </div>
      )}
    </div>
  );
}
