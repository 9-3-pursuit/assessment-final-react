import { Link } from "react-router-dom";
import logo from "../Assets/pngwing.png";
export default function Nav() {
  return (
    <nav>
      <Link to="/">
        {" "}
        <img src={logo} alt="Toroto side profile"></img>
      </Link>
      <Link to="/movies"> Movies </Link>
      <Link to="/people"> People </Link>
      <Link to="/locations"> Locations </Link>
    </nav>
  );
}
