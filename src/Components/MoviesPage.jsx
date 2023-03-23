import { useState, useEffect } from "react"
import { getMovies } from "../API/Fetch"

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
            .then(data => {
                setMovies(data)
                console.log('movies',data)
            })
        .catch(error => console.log(error))
}, [])

    return (
        null
    )
}

export default MoviesPage