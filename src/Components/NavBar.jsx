import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" width="50" height="50" />
        </Link>
      </div>
      <ul className="nav-links">
      <li>
          <Link to="/HomePage">Home</Link>
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
}

export default NavBar;
