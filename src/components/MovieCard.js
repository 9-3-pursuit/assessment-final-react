import { useState, useEffect } from "react";

const MovieCard = ({ id, url }) => {
    const [movie, setMovie] = useState({});


    // useEffect(() => {
    //     fetch(`${url}/${id}`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setMovie(res)
    //     }).catch((error)=>{
    //     console.log(error)
    //    // setError(true)
    //   })
    // }, [id])

    const fetchData = async () => {
        try {
            const res = await fetch(`${url}/${id}`);
            const data = await res.json();
            setMovie(data);
        } catch (error) {
            console.log(error);
            // setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id])
  
    return (
       <>
       <h3><strong>Title: </strong>{movie.title}</h3>
       <p><strong>Release Date: </strong>{movie.release_date}</p>
       <p><strong>Description: </strong>{movie.description}</p>

       </>
    )
}

export default MovieCard
