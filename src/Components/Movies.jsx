import { useState, useEffect } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://resource-ghibli-api-pursuit.onrender.com/films") 
            .then((res) => res.json())
            .then((movies) => setMovies(movies));
    }, []);


}