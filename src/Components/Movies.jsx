import { useState, useEffect } from "react";
import ShowSelectedMovie from "./ShowSelectedMovie";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com/films";
    useEffect(() => {
        fetch(BASE_URL) 
            .then((res) => res.json())
            .then((movies) => setMovies(movies));
    }, []);

    function handleChange(event) {
        setSelectedMovie(movies.find((movie) => movie.id === event.target.value));
        console.log(selectedMovie);
    }

    return(
        <div className="movies">
            <h1>Select a Movie</h1>

            <select onChange={handleChange}>
                <option key="" value=""></option>
                    {movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
            </select>

            {!selectedMovie ? (null) : (
                <ShowSelectedMovie selectedMovie={selectedMovie} key={selectedMovie.id} />
            )}
        </div>
    )
}