import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Locations from './components/Locations';
import MoviesIndex from './components/MoviesIndex';
import People from './components/People';
import Home from './components/Home';



function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesIndex />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
