import "./App.css";
import Nav from "./components/Nav.js";
import Locations from "./components/Locations.js";
import Movies from "./components/Movies.js";
import Navbar from "./components/Navbar.js";
import People from "./components/People.js";


function App() {
  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
      <Navbar />
      <Switch>
        <Route path="/nav" component={Nav} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path='/locations' component={Locations} />
      </Switch>
    </div>
  );
}

export default App;
