import { getAllMovies } from "../api/fetch";
import { useState, useEffect } from "react";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState("")
  
  useEffect(() => {
    getAllMovies().then((data) => {
      setAllMovies(data);
      console.log(data);
    });
  }, []);

  function handleSelectChange() {
    console.log("hi");
  }
  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select name="movies" id="movies" onChange={handleSelectChange}>
        <option value="">---Please choose an option---</option>
        {allMovies.map((movie) => {
          <option key={movie.id} value={movie.title}>
            {movie.title}
          </option>;
        })}
      </select>
    </div>
  );
}
export default Movies;
