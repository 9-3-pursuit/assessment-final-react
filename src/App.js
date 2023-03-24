import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import People from './People';
import Locations from './Locations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;