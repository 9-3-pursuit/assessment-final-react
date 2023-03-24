import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="GhibliApp Logo" className="logo" />
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
      </ul>
    </nav>
  );
};

export default NavigationBar;
