import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Pages/Home/Home";
import Locations from "./Pages/Locations/Locations";
import Movies from "./Pages/Movies/Movies";
import People from "./Pages/People/People";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
