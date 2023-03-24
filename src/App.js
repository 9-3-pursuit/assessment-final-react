import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {

  

  return (
    <Router>
      <div className="app">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;
