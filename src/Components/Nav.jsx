import { Link } from "react-router-dom";
import logo from '../Images/ghiblilogo.png'

export const Nav = () => {
    return <nav>
        <Link to="/"><img src={logo} /></Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
    </nav>
}

export default Nav;