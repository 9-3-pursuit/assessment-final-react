// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav.js';
import Home from './Components/Home.js';
import Movies from './Components/Movies.js';
import People from './Components/People.js';
import Locations from './Components/Locations.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const API_URL = "https://resource-ghibli-api-pursuit.onrender.com/films";
 
console.log(API_URL)

function App() {



  return (
    <div className="App">
     <header className="App-header">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}


export default App;
