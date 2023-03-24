import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MoviesPage from "./pages/MoviesPage";


function App() {
  return (
    <div className="app">
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies"element={<MoviesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
