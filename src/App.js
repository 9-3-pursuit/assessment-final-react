import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
import NavigationBar from './components/NavBar';
import MoviesPage from './components/Movies';
import PeoplePage from './components/People';
import LocationsPage from './components/Locations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/locations" component={LocationsPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

