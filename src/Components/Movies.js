import React, { useState, useEffect } from "react";

const API_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default function Movies() {
 
  const [movies, setMovies] = useState([]);
  
  const [selectedMovieID, setSelectedMovieID] = useState("default");

  const [hideStatus, setHideStatus] = useState(false);

//   if (!movieList) {
//     return null;
//   }


  let selectedMovie = movies && movies.find((movie) => {
    console.log(movie)
    return selectedMovieID === movie.id
  });

  useEffect(() => {
    fetch(`${API_URL}/films`)
      // console.log(`${API_URL}/character`)
      .then((res) => res.json())
      .then((res) => setMovies(res));
  }, []);

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select
        name=""
        id=""
        value={selectedMovieID}
        onChange={(e) => {
          console.log(e.target.value);
          setHideStatus(false);
          setSelectedMovieID(e.target.value);
        }}
      >
        <option value="default"></option>
        {movies && movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      <article>
        {selectedMovie ? (
          <section>
            <h4>{selectedMovieID.name}</h4>
            <div className="moviedetails">
                <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            </div>
            <button onClick={() => setHideStatus((oldMovie) => !oldMovie)}>
              {hideStatus ? "Hide Status" : "Show Status"}
            </button>
            {hideStatus ? <p>{selectedMovieID.status}</p> : null}
          </section>
        ) : null}
      </article>
    </div>
  );
}

    