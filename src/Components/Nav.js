import { Link } from "react-router-dom";



export default function Nav() {
  return (
    <div>
      <nav>
        <p>This is the Nav page</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
    </div>
  );
}
