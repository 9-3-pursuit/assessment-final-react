import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import People from "./components/People";

function App() {
  return (
    <div>
    <Router>
    <Nav/>  
  <div className="wrapper">
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/people" element={<People/>} />
          </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
