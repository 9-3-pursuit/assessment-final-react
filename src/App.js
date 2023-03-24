import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/Homepage"
import Locations from "./Components/Locations"
import Movies from "./Components/Movies"
import People from "./Components/People"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/people" element={<People />} />

        </Routes>
      </Router>

    </div>


  );
}

export default App;
