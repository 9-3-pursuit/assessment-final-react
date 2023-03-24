import { useEffect,useState } from "react"
export default function Movies() {
const [movies, setMovies] = useState([])
const [selectMovie, setSelectMovie] = useState("")
  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
    .then(res => res.json())
    .then(response => setMovies(response))
  }, [])
  
  function handleSelectChange(e) {
    setSelectMovie(e.target.value)

  }
  return(
    <div className="movies">
    <select onChange={handleSelectChange}>
      <option value=""></option>
      
      {movies.map((movie) => { 
        return <option value={movie.title} key={movie.id}>
         <ul>
          <li>{movie.title}</li>
          </ul>
          
          </option>
    }
  )}
      </select>
      
        <div>
        {movies && movies.map((movie) => {
          if (movie.title === selectMovie) {
            return <div>
              <h1>Title:{movie.title}</h1>
              <p><span className="date">Release Date:</span>{movie.release_date}</p>
              <p><span className="description">Description:</span>{movie.description}</p>
             
            </div>
          }
         }
        
      )} </div>
</div>
  )
}