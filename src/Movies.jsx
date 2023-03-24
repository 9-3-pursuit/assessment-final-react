import { useEffect, useState } from "react";

const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com/films"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState("default");

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((movieData) => setMovies(movieData));
    }, [])

    const selectedMovie = movies.find(movie => {
        return (selectedMovieId === movie.id)
    })

    console.log(selectedMovie);
    return (
           <div className="movies">
            <h3>Select a Movie</h3>
            <select value={selectedMovieId} onChange={(e) => {
                setSelectedMovieId(e.target.value);
            }} >
                <option value="default"></option>
                {movies.map((movie) => {
                    return (<option key={movie.id} value={movie.id} >{movie.title}</option>)
                })}
            </select>
            <article>
                {selectedMovie ? (
                    <section>
                        <h2>{selectedMovie.title}</h2>
                        <p>Release Year: {selectedMovie.release_date}</p>
                        <p>{selectedMovie.description}</p>
                    </section>
                ) : null}
            </article>
        </div>
    )
}