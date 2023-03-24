import Nav from "./Nav";
import { useState, useEffect } from "react";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [year,setYear] = useState("");
    const [description, setDescription] = useState("");
    const [imgSrc,setImgSrc] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value){
            let selected = movies.find((movie) => movie.id == e.target.value);
            console.log(selected);
            setTitle(selected.title);
            setYear(selected.release_date);
            setDescription(selected.description);
            setImgSrc([selected.image,selected.movie_banner]);
        }
        else{
            setTitle("");
            setYear("");
            setDescription("");

        }
    }
    useEffect(() => {fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
    .then((results) => results.json())
    .then((response) => setMovies(response))},[]);

    const divStyle = {
        backgroundImage: 'url(' + imgSrc[1] + ')',
        backgroundSize: 'cover'
    };
    const infoStyle = {
        backgroundColor: 'rgba(255,255,255,0.8)',
        textAlign: 'center'
    }
    return <div>
        <Nav />
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleChange}>
                <option value=""></option>
                {movies.map((movie) => <option value={movie.id}>{movie.title}</option>)}
            </select>
            <div style={divStyle}>
                <img src={imgSrc[0]} height="200"/>
                <div style={infoStyle}>
                    <h3>Title: {title}</h3>
                    <h5>Release Date: {year}</h5>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Movies;