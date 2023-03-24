//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useEffect, useState } from 'react';


const base_URL = "https://resource-ghibli-api-pursuit.onrender.com/"

function App() {
  const [url_edpoint, set_url_endpoint] = useState("");
  const [locations, setLocations] = useState([])
 
 
useEffect(()=>{
  fetch(base_URL + url_edpoint)
  .then((res) => res.json())
  .then((res) => {
    setLocations(res)
  }).catch(error => {
      'error'
  })
},[url_edpoint])

function handleClick(endpoint){
  set_url_endpoint("locations")
}
 
  
  return (
    <div className="app">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/people" element={<People endpoint={url_edpoint}/>}/>
      <Route path="/locations" element={<Locations locations={locations} handleClick={handleClick}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;