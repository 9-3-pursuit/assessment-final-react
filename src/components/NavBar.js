import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './Yeti.png';

const NavigationBar = () => {
  return (
    <nav>
      <img src={logo} alt="Yeti"/>
      <Link to="/">
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
