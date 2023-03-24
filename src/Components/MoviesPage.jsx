import { useEffect, useState } from "react"
import {getMovies} from '../API/Fetch'

const MoviesPage = () => {

    const [movies, setMovies] = useState([])
    const [selectTitle, setSelectTitle] = useState('')
    const [selectDescription, setSelectDescription] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    useEffect(() => {
        getMovies()
            .then((data) => {
                setMovies(data)
                console.log('movies', data)
            }) 
        .catch((error) => console.log(error))
    }, [])

    const selectedMovie = (e) => {
        const selectedMovieId = e.target.value

        if (selectedMovieId === '') {
            setSelectTitle('')
            setSelectDescription('')
            setReleaseDate('')
            
        } else {
            const selectedMovie = movies.find((movie) => movie.id === selectedMovieId)
            setSelectTitle(selectedMovie.title)
            setSelectDescription(selectedMovie.description)
            setReleaseDate(selectedMovie.release_date)
            
        }

    }


    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select onChange={selectedMovie}>
                
            <option value=''>Select a Movie</option>
            {movies ? movies.map((movie) => {
                  return <option key={movie.id} value={movie.id}>
                     {movie.title} 
                    </option>
            }) : null}
            </select>
            
            {selectTitle && selectDescription ?  
                 
                    <div>
                   
                    <h3> <strong>Title: </strong>{selectTitle}</h3> 
                    <h4><strong>Release Date: </strong>{releaseDate}</h4>
                        <p><strong>Description: </strong> {selectDescription}</p>
                   </div>
                
            : null}
        

        </div>
    )
}

export default MoviesPage