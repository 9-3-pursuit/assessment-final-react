import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Home from "./components/Home";
import Nav from "./components/Nav";

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
          </Routes>
        </main>
      </div>
      
      </Router>
        
    </div>
  );
}

export default App;
