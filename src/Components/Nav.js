import { Link } from "react-router-dom"
import logo from"./favicon.ico";
import "./Nav.css";
export default function Nav() {
  return(
    <div className="nav">
      <nav>
        <ul>
        <Link to="/"><img src={logo} alt="logo"/></Link>    
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
        </ul>
      </nav>
    </div>
  )
}