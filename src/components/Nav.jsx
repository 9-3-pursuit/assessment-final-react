import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
}