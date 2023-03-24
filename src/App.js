//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";


const base_URL = "https://resource-ghibli-api-pursuit.onrender.com/"

function App() {
  const [url_edpoint, set_url_endpoint] = useState("");
  const [locations, setLocations] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [error, setError] = useState("");
 
 
  const fetchData = useCallback( async () => {
    try {
      const res = await fetch(base_URL + url_edpoint);
      const data = await res.json();
      if (url_edpoint === "locations") {
        setLocations(data)
      }
      if (url_edpoint === "people") {
        setPeople(data)
      } 
    } catch (error) {
      console.log(error);
      // setError(true);
    }
  }, [url_edpoint]) 

  useEffect(() => {
    fetchData();
  }, [fetchData])


  // Locations
  function handleShowLocations() {
  set_url_endpoint("locations")
}

  // People
  function filterPeople(search, people) {
    const result = people.find((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()));
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(searchInput){
      const result = filterPeople(searchInput, people);
      if (result) {
        setPerson(result)
      }  else {
        setPerson("")
        setError("Not Found")
      }
    } else {
      setPerson("")
      setError("Not Found")
    }
  }

  function handleSearch(e) {
    setSearchInput(e.target.value);
    const result = e.target.value.length ? "people" : null
    set_url_endpoint(result)
  }

  return (
    <div className="app">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
          <Route path="/people" element={<People searchInput={searchInput} person={person} onSearch={handleSearch} handleSubmit={handleSubmit} error={error} />} />
          <Route path="/locations" element={<Locations locations={locations} handleClick={handleShowLocations} setLocations={setLocations}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;