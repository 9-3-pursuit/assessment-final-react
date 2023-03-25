import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MoviesPage from "./pages/MoviesPage";
import PeoplePage from "./pages/PeoplePage";
import LocationsPage from "./pages/LocationsPage"



function App() {
  return (
    <div className="app">
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies"element={<MoviesPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
