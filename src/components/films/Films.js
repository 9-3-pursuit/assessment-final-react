import React, { useState, useEffect } from "react"
import ErrorMessage from "../errors/ErrorMessage"
import { getAllFilms } from "../api/fetch"



export default function Films() {
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]) ;
  const [selectedfilmId, setSelectedFilmId] = useState(""); 
  
  const handleFilmSelect = (event) => {
    setSelectedFilmId(event.target.value)
  }

  const selectedFilm = films.find((film) => film.id === selectfilmId) 
 
  useEffect(() => {
    getAllFilms()
    .then((response) => response.json())
    .then((data) => {
        setFilms(data);
        setError(false);
    })
  }).catch((error) => {
    console.log(error);
      setError(true);
  }, [])
  
  return (
    <div>
        <h1>Select a Movie</h1>
        <select
           name="film-select"
           id="film-select"
           value={selectedfilmId}
           onChange={handleFilmSelect} 
           >
            <option value="" >Select a movie</option>
            {films.map((film) => (
                <option key={film.id} value={film.id}>
                  {film.title}
                </option>
            ))}
        </select>
    </div>
  )

}