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


  return(
    <div className="movies">
        <h1>Select a Movie</h1>
        
    </div>
  )
}
export default Movies;
