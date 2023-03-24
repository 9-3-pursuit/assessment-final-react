import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.js';
import NavigationBar from './components/NavBar.js';
import MoviesPage from './components/Movies.js';
import PeoplePage from './components/People.js';
import LocationsPage from './components/Locations.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
            <Routes>
              <Route exact path="/" element={HomePage} />
              <Route path="/movies" element={MoviesPage} />
              <Route path="/people" element={PeoplePage} />
              <Route path="/locations" element={LocationsPage} />
            </Routes>
      </BrowserRouter>
      </div>
    );
  }

export default App;

