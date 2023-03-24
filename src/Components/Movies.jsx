import { useEffect, useState } from "react"
import Film from "./Film"
import fetchCall from "../fetchCall"

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelected] = useState("empty")
    function changeMovie(e) {
        setSelected(e.target.value)
    }
    // useEffect(() => {

    // }, [selectedMovie])
    useEffect(()=> {
        fetchCall("films")
        .then((response) => {
            setMovies(response)
            console.log(response)
        })

    },[])
    return (<>
    <div className="movies">
        <h2>Select A Movie</h2>
<select onChange={changeMovie} name="movies" id="movies" >
    <option value="empty"></option>
  {movies.map((movie) => <option value={movie.title}>{movie.title}</option>)}
</select>
{selectedMovie !== "empty" && 

    <Film movies={movies} selectedMovie={selectedMovie}/>
}

    </div>
    </>)
}