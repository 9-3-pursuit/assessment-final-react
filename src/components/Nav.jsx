import React from 'react';
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="Ghibli" /></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
}