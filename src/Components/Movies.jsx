import { useEffect, useState } from "react"
import fetchCall from "../fetchCall"

export default function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(()=> {
        fetchCall("films")
        .then((response) => {
            setMovies(response)
            console.log(response)
        })

    },[])
    return (<>
    <div className="movies">
        <h2>Select A Movie</h2>
<select name="movies" id="movies" >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<aside className="movies">
    </aside>
    </div>
    </>)
}