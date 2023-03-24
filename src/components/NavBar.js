import logo from "./images/pngwing.com.png"

const NavBar = () => {
    return (
            <nav>
                  <img src={logo} alt="logo" />
             
                        <a href="/">Home</a>
                  
                        <a href="/movies">Movies</a>
                 
                        <a href="/people">People</a>
                  
                        <a href="/locations">Locations</a>
            </nav>
    )
}

export default NavBar