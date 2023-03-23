import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="" alt="Ghibli Logo" />
      </Link>
      <Link to = "/movies">Movies</Link>
      
    </nav>
  );
};

export default NavBar;
