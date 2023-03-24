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
  const [searchInput, setSearchInput] = useState("")
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
 
 
useEffect(()=>{
  fetch(base_URL + url_edpoint)
  .then((res) => res.json())
  .then((res) => {
    if (url_edpoint === "locations") {
      setLocations(res)
    }
    if (url_edpoint === "people") {
      setPeople(res)
    } 
  }).catch(error => {
      'error'
  })
},[url_edpoint])


  // Locations
  function handleShowLocations() {
  set_url_endpoint("locations")
}

  // People

  function filterPeople(search, people) {
    const result = people.find((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()));
    return result;
    /// setPerson(result)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(people)
    const result = filterPeople(searchInput, people); 
    setPerson(result)

    // console.log(result)
    //set_url_endpoint("people")

  }

  function handleSearch(e) {
    setSearchInput(e.target.value);
    const result = e.target.value.length ? "people" : null
    set_url_endpoint(result)
  }


   console.log(person)
  
  return (
    <div className="app">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
          <Route path="/people" element={<People searchInput={searchInput} person={person} onSearch={handleSearch} handleSubmit={handleSubmit} />} />
          <Route path="/locations" element={<Locations locations={locations} handleClick={handleShowLocations} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;