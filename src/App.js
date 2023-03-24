import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
    <Router>
    <Nav/>  
  <div className="wrapper">
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
