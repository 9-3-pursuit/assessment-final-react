import { useEffect } from "react";





useEffect (()=>{
fetch("https://ghibliapi.herokuapp.com/locations")
    .then(res=>res.json())
    .then(data=>{
        location(data);
    })
}, []);
