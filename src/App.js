import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Movies />} />
          <Route path="/" element={<People />} />
          <Route path="/" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
