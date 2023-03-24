import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./Module3-Logo.png";

export default function Nav() {
  return (
    <nav>
      <article className="homeLogo">
        <Link to="/"><img src={logo} alt="logo" ></img>
        </Link>
        </article>
      <aside>
      <ul>
        
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        
      </ul>
      </aside>
    </nav>
  );
}