import { Link } from "react-router-dom"
export default function Nav() {
    return (<>
        <nav >
        <Link to="/"><p>STUDIO</p></Link>
       <Link to="/movies"><p>Movies</p></Link>
       <Link to="/people"><p>People</p></Link>

       <Link to="/locations"><p>Locations</p></Link>
    </nav>  
    </>)
}