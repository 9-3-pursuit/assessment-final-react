import {useState} from "react";

export default function Movies() {
    const [userSearch, setUserSearch] = useState("");
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://resource-ghibli-api.onrender.com/films${movie}`).then(response => response.json()).then((response)=>{
        setError(false)    
            setMovie(response.results[0]);
            setUserSearch("")
    })
        .catch((error) => {
            setError(true);
        });
    }
    return (
        <div>
            <h2>Select a Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userSearch} id="search" onChange={(e) => setUserSearch(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
            {(!!Object.keys(movie).length && !error) && (
            <section>
                 <h1>Title: {movie.title}</h1>
                 <p>Release date: {movie.release_date}</p>
                 <p>Description: {movie.description}</p>
            </section>
            )};
            {error && <h2>Not Found</h2>}
        </div>

        
    );
};