import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home"
import Nav from "./components/Nav"
import Movies from "./components/Movies"
import People from "./components/People"
import Locations from "./components/Locations"

export default function App() {
  return (
    <main>
     <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </main>
  );
}
