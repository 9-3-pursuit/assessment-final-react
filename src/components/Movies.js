import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

const movies_URL = "https://resource-ghibli-api-pursuit.onrender.com/films"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState("")

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
        setSelectedMovie(movies.find(movie => e.target.value === movie.id ))
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
            { selectedMovie ?
                (<>
                    <h3><strong>Title: </strong>{selectedMovie.title}</h3>
                    <p><strong>Release Date: </strong>{selectedMovie.release_date}</p>
                    <p><strong>Description: </strong>{selectedMovie.description}</p>
                </>) : null}
        </main>
    )
}

export default Movies


//<MovieCard id={movieId} url={movies_URL}/>
