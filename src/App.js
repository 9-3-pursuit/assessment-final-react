import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/movies" element={<Movies/>}  />
          <Route path="/locations" element={<Locations/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
