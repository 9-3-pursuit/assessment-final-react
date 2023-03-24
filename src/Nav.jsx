import "./Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <header>
            <nav>
                <article>
                    <a href="http://localhost:3000/">
                       <img src="/Logo.png" alt="logo" />
                    </a>
                </article>
                <ul>
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
        </header>
    );
}