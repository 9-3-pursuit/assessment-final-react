import "./NavBar.css"
import logo from "./images/png-transparent-ghibli-museum-dog-studio-ghibli-logo-totoro-studio-ghibli-angle-white-mammal.png"

const NavBar = () => {
    return (
        <div href="navBar">
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/movies">Moves</a>
                    </li>
                    <li>
                        <a href="/people">People</a>
                    </li>
                    <li>
                        <a href="/locations">Locations</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar