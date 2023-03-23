// nav element
// logo must be 50 x 50
// logo must link back to home page
// links for people, movie, & location
// figure out how to import logo file & render to page

import { Link } from "react-router-dom";
import React from "react";
var logo = require("./icons8-totoro-50.png");
export default function Nav() {
  return (
    <nav>
      <article>
        <Link to="/">
          <img src={logo} alt="logo" />
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
