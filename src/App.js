import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import People from "./components/People";
import { Link, Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/Movies">Movies</Link>
      {"  "}
      <Link to="/People">People</Link>
      {"  "}
      <Link to="/Locations">Locations</Link>
      {"  "}
    </nav>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/People" component={People} />
        <Route path="/Locations" component={Locations} />
        <Route path="/NavBar" component={NavBar} />
      </Switch>
    </div>
  </div>
);

export default App;
