//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="app">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/locations" element={ <Locations/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;