

import { useState, useEffect } from "react";
import { getMovies } from "../Api/fetch"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [movieSelection, setMovieSelection] = useState(null);

    useEffect(() => {
        getMovies()
            .then((response) => {
                console.log(response)
                setMovies(response)
                setMovieSelection(response)
            })
            .catch(error => console.error(error));

    }, []);

    function ShowMovie({ movieSelection }) {
        return (
            <div>
                <h1>Title: {movieSelection.title} </h1>
                <h3>Release Date: {movieSelection.release_date} </h3>
                <p className="description"><span >Description:</span> {movieSelection.description}</p>
            </div>)
    }
    function handleSelectChange(event) {
        setMovieSelection(movies.find((movie) => movie.id === event.target.value));

    }
    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleSelectChange}>
                <option value=""></option>
                {movies && movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
            </select>

            {!movieSelection ? (null) : (
                <ShowMovie movieSelection={movieSelection} />
            )
            }
        </div>
    )
}
