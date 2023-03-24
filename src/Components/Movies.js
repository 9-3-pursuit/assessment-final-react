import { useState, useEffect } from "react";
import getInfo from "../api/fetch";

export default function Movies() {
    const [currentMovie, setCurrentMovie] = useState(null);
    const [films, setFilms] = useState([]);
    const filmTitles = films.map(film => {
      return(
        <option key={film.id} value={film.title}>{film.title}</option>
      )
    })

    useEffect(() => {
      getInfo("films")
        .then(response => {
          setFilms(response)
        }).catch(error => {
          console.log(error);
        })
    }, [])

    function handleSelect(event) {
        setCurrentMovie(films.find(film => film.title === event.target.value))
    }

    return (
      <div className="movies flex flex-col items-center mx-20">
        <label htmlFor="movies" className="text-[48px]">
          Select a Movie
        </label>
        <select
          onChange={handleSelect}
          name="movieSelect"
          id="movies"
          className="w-[300px] h-8 text-sm outline-none rounded-sm font-semibold border pl-2"
        >
          <option value=""></option>
          {filmTitles}
        </select>
        {currentMovie && (
          <div className="flex flex-col bg-[aliceblue] items-center mt-4  p-4 space-y-4 h-[240px] min-h-fit w-11/12 ">
            <span className="text-[30px] font-extrabold">
              Title: <span className="font-medium">{currentMovie.title}</span>
            </span>
            <span className="text-sm font-extrabold">
              Release Date: <span className="font-medium">{currentMovie.release_date}</span>
            </span>
            <span className="text-sm font-extrabold">
              Description: <span className="font-medium">{currentMovie.description}</span>
            </span>
          </div>
        )}
      </div>
    );
}