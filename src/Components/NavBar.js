import { Link } from "react-router-dom";
import logo from "./Images/Studio_Ghibli_logo.png";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Ghibli Logo" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
};
export default NavBar;
