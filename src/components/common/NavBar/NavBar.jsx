import { Link } from "react-router-dom";
import totoro from "../../../assets/totoro.png";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={totoro} alt="totoro" />
          </Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
