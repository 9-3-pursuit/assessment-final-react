import { Link } from "react-router-dom";
import { React } from "react";
import logo from "./logo.jpeg";

export default function NavBar() {
    return (

        <header>

            <nav className="nav-bar">
                <article>
                    <Link to="/"><img src={logo} alt=""></img>
                    </Link>
                </article>

                <li>
                    <Link to="/movies"><p>Movies</p></Link>
                </li>

                <li>
                    <Link to="/people"><p>People</p></Link>
                </li>
                <li>
                    <Link to="/locations"><p>Locations</p></Link>
                </li>

            </nav>
        </header>
    )
}