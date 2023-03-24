import { getAllMovies } from "../api/fetch";
import { useState, useEffect } from "react";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState("");
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
    setSelectMovie(event.target.value);
    setError("Not Found");
  }

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select name="movies" id="movies" onChange={handleSelectChange}>
        <option value="">---Please choose an option---</option>
        {error ? (
          allMovies.map((movie) => {
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>;
          })
        ) : (
          <div>
            <p> {error} </p>{" "}
          </div>
        )}
      </select>
    </div>
  );
}
export default Movies;
