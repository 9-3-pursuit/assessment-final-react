import { useState } from "react";
import useStudioGhibliAPI from "../../Hooks/useStudioGhibliAPI";

export default function Movies() {
  const movies = useStudioGhibliAPI("films");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMovieSelectChange = (e) => setSelectedOption(e.target.value);
  const selectedMovieDetails =
    selectedOption === "" ? "" : movies.find((m) => m.title === selectedOption);

  return (
    <main>
      <section className="movies">
        <h2>Select a Movie</h2>
        <select onChange={handleMovieSelectChange}>
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
            <p>
              <span>Release Date:</span> {selectedMovieDetails.release_date}
            </p>
            <p>
              <span>Description</span>: {selectedMovieDetails.description}
            </p>
          </aside>
        )}
      </section>
    </main>
  );
}
