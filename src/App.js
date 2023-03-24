import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Home from "./components/Home";
import Nav from "./components/Nav";
import People from "./components/people/People";
import Locations from "./components/locations/Locations";


 function App() {
  return (
    <div className="app">
      <Router>
      <div className="container">
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies/>} /> 
            <Route path="/people" element={<People/>} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </div>
      
      </Router>
        
    </div>
  );
}

export default App;
