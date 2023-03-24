import { Link } from "react-router-dom";
import Logo from "./images/appleLogo.jpeg";
import Home from "./Home";

export default function Nav (){
    return (
    <div>
        <nav className= "navbar">
            <a href="http://localhost:3001/">

                <img src={Logo} height={50} width={50} alt="logo" />
            </a>
            <Link to="/movies">
                <h2>Movies</h2>
            </Link>
            <Link to="/people">
                <h2>People</h2>
            </Link>
            <Link to="/locations">
                <h2>Locations</h2>
            </Link>
        </nav>
    </div>
);
}