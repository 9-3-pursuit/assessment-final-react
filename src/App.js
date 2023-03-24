import Nav from "./Components/Nav.js";
import Homepage from "./Components/Homepage";
import Movies from "./Components/Movies";
import People from "./Components/People";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/people" element={<People />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
