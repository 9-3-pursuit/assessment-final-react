import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Logo/studio-ghibli-logo.png"

function NavBar() {
  return (
    <nav>
        <Link to="/">
            <img src={logo} alt="logo"/>
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
    </nav>
  )
}

export default NavBar