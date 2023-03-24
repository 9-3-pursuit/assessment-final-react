import { useState,useEffect } from "react";
import ShowMovie from "./ShowMovie";
import "./Movies.css"

export default function Movies() {
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState(null);
useEffect(() => {
  fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
    .then((res) => res.json())
    .then((movies) => setMovies(movies));
}, []);

function handleSelectChange(e) {
  setSelectedMovie(movies.find((movie) => movie.id === e.target.value));
 

}
  return (
    <div className="movies">
      <h1>Select a Movie</h1> 
      <select onChange={handleSelectChange}>
        <option value=""></option>
        {movies.map((movie) => <option key={movie.id}value={movie.id}>{movie.title}</option>)}
        </select>
        
        {!selectedMovie ? (null) : (
        <ShowMovie selectedMovie={selectedMovie} />
        )
        } 
    </div>
  )
}