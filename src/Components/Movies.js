import { getAllMovies } from "../api/fetch";
import { useState, useEffect } from "react";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState("");

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setAllMovies(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSelectChange(event) {
    const findMovie = allMovies.find(
      (movie) => movie.id === event.target.value
    );
    setSelectMovie(findMovie);
    console.log(selectMovie);
  }

  return (
    <main className="movies">
      <section>
        <h2>Select a Movie</h2>
        <select name="movies" id="movies" onChange={handleSelectChange}>
          <option value="">--Please choose an option--</option>
          {allMovies
            ? allMovies.map((movie) => {
                return (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                );
              })
            : null}
        </select>
      </section>
      {selectMovie ? (
        <aside>
          <h2>
            {" "}
            <span>Title:</span> {selectMovie.title}{" "}
          </h2>
          <p>
            {" "}
            <span>Release Date:</span> {selectMovie.release_date}{" "}
          </p>
          <p>
            {" "}
            <span>Description:</span> {selectMovie.description}{" "}
          </p>
        </aside>
      ) : null}
    </main>
  );
}
export default Movies;
