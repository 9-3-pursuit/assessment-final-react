import { getAllMovies } from "../API/Fetch"
import { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";

export default function Movies() {
    const [allMovies, setAllMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState("")
    
    
    useEffect(() => {
        getAllMovies().then(response => {
          setAllMovies(response)
          
          
        })
        // .catch((error) => {
        //   console.log(error)
        // })
      }, [])
      
      const dropDownOptions = allMovies.map((movie, id) => {
        return (
            <option key={id} value={movie.title}>{movie.title}</option> 
            )
    })
      function handleSelect(event) {
        setSelectedMovie(allMovies.find((movie)  => movie.title === event.target.value))
           
    }
    return (
        <div className="movies">
             <label htmlFor="movie-select"><h1>Select a Movie</h1></label>
            <select name="movie" id="movie-select" onChange={handleSelect}>
            <option value="">--Please select an option--</option>
                {dropDownOptions} 
            </select>
            <div>
                {selectedMovie &&    
                    <MovieInfo
                        selectedMovie={selectedMovie}
                    />
                }
            </div>
        </div>
      );
  }