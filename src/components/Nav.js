import { Link } from "react-router-dom"

export default function Nav() {
    return (
      <nav>
        <p>
            <Link to="/"><img src="#" alt="nav-img" /></Link>
        </p>
        <p>
            <Link to="/movies">Movies</Link>
        </p>
        <p>
            <Link to="/people">Peoples</Link>
        </p>
        <p>
            <Link to="/locations">Locations</Link>
        </p>
     
      </nav>
    );
  }