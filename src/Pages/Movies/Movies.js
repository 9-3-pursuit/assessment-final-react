import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        console.log(result);
      });
  }, []);

  const handleMovieChange = (e) => setSelectedOption(e.target.value);
  const selectedMovieDetails =
    selectedOption === "" ? "" : movies.find((m) => m.title === selectedOption);
  console.log(selectedMovieDetails);

  return (
    <main>
      <section className="movies">
        <h2>
          <strong>Title:</strong> Select a Movie
        </h2>
        <select onChange={handleMovieChange}>
          <option value=""></option>
          {movies.map((movie) => {
            const { title, id } = movie;
            return (
              <option value={title} key={id}>
                {title}
              </option>
            );
          })}
        </select>
        {selectedOption && (
          <aside>
            <h2>Title: {selectedMovieDetails.title}</h2>
            <h6>
              <span>Release Date:</span> {selectedMovieDetails.release_date}
            </h6>
            <p>
              <span>Description</span>: {selectedMovieDetails.description}
            </p>
          </aside>
        )}
      </section>
    </main>
  );
}
