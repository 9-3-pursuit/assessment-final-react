import React from "react"
import {Link} from "react-router-dom"

export default function Nav(){
    console.log("test")
    
    return(
       <nav>
<Link to="/">
<img src="https://www.kindpng.com/picc/m/83-834518_sad-totoro-by-jax89man-d4w0y23-ghibli-png-transparent.png" alt="Sad Totoro By Jax89man-d4w0y23 - Ghibli Png, Transparent Png@kindpng.com"/>
   
</Link>
<Link to="/movies">Movies</Link>
<Link to="/people">People</Link>
<Link to ="/locations">Locations</Link>
       </nav>
    )
}