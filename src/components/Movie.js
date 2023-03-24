const { useState, useEffect } = require("react");


const Movies()=>{
    const[ movies, setMovies ] = useState([]);
    const[moviePick, setMoviePick] = useState({});


   useEffect (()=> {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res=>res.json())
    .then(data=>{
        setMovies(data);
    })
}, []);
handleChange(e)=>{
    let findMovies = movies.find((movie)=>{
        return movie.title === e.target.value;
    })
    setMoviePick(findMovies);
}

<div className="movie">
    <h1>Select a Movie</h1>
    <select onChange={handleChange}></select>
    <div className="movies-card">
            <h3>Title: {moviePick.title}</h3>
            <h3>Release Date: {moviePick.releasedate}</h3>
            <h3>Description: {moviePick.description} </h3>
    </div>
</div>

}










export default Movie;