import { useState, useEffect } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { getMovies, getLocation, getPeople } from "./Components/api/fetch";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  const  [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("");

  const [people, setPeople] = useState([]);

  const [locations, setLocations] = useState();
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    getMovies()
    .then((data) => {
        setMovies(data);
    })
    .catch((error) => console.log(error));

    getPeople()
    .then((data) => {
        setPeople(data);
    })
    .catch((error) => console.log(error));

    getLocation()
    .then((data) => {
      setLocations(data);
    })
    .catch((error) => console.log(error));
}, [] )
 
function handleSelectChange (event) {
    setSelected(movies.find((movie) => movie.id === event.target.value));
}


function toggleShowLocation () {
  setShowLocations(!showLocations)
}

function sortBy (sorter) {
  setLocations([...locations].sort((a, b) => a[sorter].localeCompare(b[sorter])))
}


  return (
    <BrowserRouter>
      <NavBar/>
      <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies handleSelectChange={handleSelectChange} movies={movies} selected={selected}/>}/>
        <Route path="/people" element={<People people={people}/>}/>
        {/* <Route path="/people" element={<People people={people} person={person} error={error} handleChande={handleChange} handleSubmit={handleSubmit}/>}/> */}
        <Route path="/locations" element={<Locations locations={locations} showLocations={showLocations} toggleShowLocation={toggleShowLocation} sortBy={sortBy}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
