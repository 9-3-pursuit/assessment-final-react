import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

const movies_URL = "https://resource-ghibli-api-pursuit.onrender.com/films"

const Movies = () => {
    const [movieId, setMovieId] = useState("")
    const [movies, setMovies] = useState([]);
    

const fetchData = async () => {
    try {
        const res = await fetch(movies_URL);
        const data = await res.json();
        setMovies(data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchData();
}, [])
    
    const handleSelectChange = (e) => {
        setMovieId(e.target.value)
    }
    
    return (
        <main className="movies">
            <h1>Select a Movie</h1>
            <select id="dropdown" onChange={handleSelectChange}>
            <option key="empty option" value="">select movie ...</option>
                {movies.map((movie) => {
                    return (
                        <option key={movie.id} value={movie.id}>{movie.title}</option>
                        )
                })}
            </select>
            {movieId ? (<MovieCard id={movieId} url={movies_URL}/>) : null }
        </main>
    )
}

export default Movies



