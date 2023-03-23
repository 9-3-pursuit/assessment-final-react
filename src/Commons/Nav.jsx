import { Link } from "react-router-dom"
import Studio_Ghibli_logo from '../Images/Studio_Ghibli_logo.png'


const Nav = () => {
    return (
        
        <nav>
            <Link to='/'>
                <img src={Studio_Ghibli_logo} alt='Studio Ghibili Logo' />
            </Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </nav>
    )
}

export default Nav