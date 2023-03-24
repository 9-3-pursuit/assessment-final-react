import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"

const movies_URL = "https://resource-ghibli-api-pursuit.onrender.com/films"

const Movies = () => {
    const [movieId, setMovieId] = useState("")
    const [movies, setMovies] = useState([]);
    
//   function fetchData(){
//   }

  useEffect(() => {
    fetch(movies_URL)
    .then((res) => res.json())
    .then((res) => {
        setMovies(res)
    }).catch((error)=>{
    console.log(error)
   // setError(true)
  })
}, [])

// const fetchData = async () => {
//     try {
//         const res = await fetch(movies_URL);
//         const data = await res.json();
//         setMovies(data);
//     } catch (error) {
//         console.log(error);
//         // setError(true);
//     }
// }

// useEffect(() => {
//     fetchData();
// }, [])
    
    const handleSelectChange = (e) => {
        setMovieId(e.target.value)
    }
    
    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select id="dropdown" onChange={handleSelectChange}>
                {movies.map((movie) => {
                    return (
                        <>
                        <option key="empty option" value=""></option>
                        <option key={movie.id} value={movie.id}>{movie.title}</option>
                        </>)
                })}
            </select>
            {movieId ? (<MovieCard id={movieId} url={movies_URL}/>) : null }
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


