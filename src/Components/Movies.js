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

  function handleSelectChange(){
    console.log("hi")
  }
  return(
    <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={handleSelectChange}>
        <option name="" value = "">---Please choose an option---</option>
        
        </select>
    </div>
  )
}
export default Movies;
