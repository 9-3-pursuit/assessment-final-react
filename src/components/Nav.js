import { Link } from "react-router-dom";
import img from "./assets/gilbiLogo.jpeg";
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fs-3" to="/">
              <section className="logo d-flex align-items-center">
                <img className="img-thumbnail logo-img" src={img} alt="Ghilbi logo" />
              </section>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3" to="/people">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-3" to="/locations">
              Locations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
