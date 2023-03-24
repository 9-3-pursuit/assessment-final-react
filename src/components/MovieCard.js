// import { useState, useEffect, useCallback} from "react";

// const MovieCard = ({ id, url }) => {
//     const [movie, setMovie] = useState({});

//     const fetchData = useCallback( async () => {
//         try {
//             const res = await fetch(`${url}/${id}`);
//             const data = await res.json();
//             setMovie(data);
//         } catch (error) {
//             console.log(error);
//             // setError(true);
//         }
//     },[id,url])

//     useEffect(() => {
//        fetchData();
//     }, [id, fetchData])
  
//     return (
//        <>
//        <h3><strong>Title: </strong>{movie.title}</h3>
//        <p><strong>Release Date: </strong>{movie.release_date}</p>
//        <p><strong>Description: </strong>{movie.description}</p>
//        </>
//     )
// }

// export default MovieCard


