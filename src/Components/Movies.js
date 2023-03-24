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
    <div className="movies">
      <h1>Select a Movie</h1>
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
      {selectMovie ? (
        <div>
          <h1> Title : {selectMovie.title}</h1>
          <h3>Release Date: {selectMovie.release_date}</h3>
          <p> Description: {selectMovie.description}</p>
        </div>
      ) : null}
    </div>
  );
}
export default Movies;
