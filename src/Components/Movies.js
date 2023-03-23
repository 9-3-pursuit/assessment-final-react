import { getAllMovies } from "../api/fetch";
import { useState, useEffect } from "react";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => {
      setAllMovies(data);
      console.log(data);
    });
  }, []);
}
export default Movies;
