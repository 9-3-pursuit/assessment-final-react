// For readability purposes, I will include smaller components inside this big file
// When I do this I will avoid passing props to the smaller components
// aka prop drilling
// aka creating dumb components/stateless components

import { useState } from "react";
import useGhibliData from "../../hooks/useGhibliData";

const Film = ({ film }) => {
  return (
    <aside>
      <p>
        <strong>Title:</strong> {film.title}
      </p>
      <p>
        <strong>Release Date:</strong> {film.release_date}
      </p>
      <p>
        <strong>Description:</strong> {film.description}
      </p>
    </aside>
  );
};

const Films = () => {
  const films = useGhibliData("films");
  const [selectedFilm, setSelectedFilm] = useState("");

  const handleFilmSelection = (e) => {
    const selectedFilmTitle = e.target.value;
    const foundFilm = films.find((film) => film.title === selectedFilmTitle);
    setSelectedFilm(foundFilm || "");
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <form>
        <select id="movies" name="movies" onChange={handleFilmSelection}>
          <option value="" key="0001">
            Select movie...
          </option>
          {films.map((film) => {
            return (
              <option value={film.title} key={film.id}>
                {film.title}
              </option>
            );
          })}
        </select>
      </form>
      {selectedFilm ? <Film film={selectedFilm} /> : null}
    </div>
  );
};

export default Films;
