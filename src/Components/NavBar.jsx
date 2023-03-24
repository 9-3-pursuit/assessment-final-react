import { Link } from "react-router-dom";
import logo from "./Haku:Dragon.jpeg";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <article className="logoHaku">
                <Link to="/"><img src={logo} alt="logo"></img></Link>
            </article>
            <aside>
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
            </aside>
        </nav>
    )
}