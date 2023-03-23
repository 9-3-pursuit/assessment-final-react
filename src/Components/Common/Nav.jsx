import "./Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <header>
            <article>
                <h1>
                    <Link to="/">
                        Home
                    </Link>
                </h1>
            </article>
            <nav>
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

