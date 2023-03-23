import { useState } from "react"
import MovieCard from "./MovieCard"

const Movies = ({ movies }) => {
    const [movieId, setMovieId] = useState("")
   // const [movie, setMovie] = useState({});

    const handleSelectChange = (e) => {
        setMovieId(e.target.value)
    }
   //console.log(movie)


    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select id="dropdown" value={movieId} onChange={handleSelectChange}>
                {movies.map((movie) => {
                    return (
                        <>
                        <option key={movie.id} value=""></option>
                        <option key={movie.id} value={movie.id}>{movie.title}</option>
                        </>)
                })}
            </select>
            {movieId ? (<MovieCard />) : null }
        </div>
    )
}

export default Movies

//value={movieId} 

// const addSelectedMovie = () => {
//     for (let element of movies){
//         if(element.id === movieId){
//             setMovie(element)
//         }
//     }
//    }


