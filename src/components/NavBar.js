import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8N4m2A0i8i8d3_report-abuse-studio-ghibli-logo-gif%2F&psig=AOvVaw2jQODMhZ84PT6QmxAk3eLl&ust=1639856801162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICn7uPM6_QCFQAAAAAdAAAAABAD"
          width="50px"
          height="50px"
          alt="pic"
        />
      </Link>

      <strong id="Movies">
        <Link to="/Movies">Movies</Link>
      </strong>

      <strong id="People">
        <Link to="/People">People</Link>
      </strong>

      <strong id="about">
        <Link to="/Locations">Locations</Link>
      </strong>
    </nav>
  );
};

export default NavBar;
