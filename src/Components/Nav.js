import { GiFilmProjector } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link className="hover:text-[#26aedb]" to={"/"}>
          <GiFilmProjector size={50}/>
        </Link>
        <Link className="hover:text-[#26aedb]" to={"/movies"}>Movies</Link>
        <Link className="hover:text-[#26aedb]" to={"/people"}>People</Link>
        <Link className="hover:text-[#26aedb]" to={"/locations"}>Locations</Link>
      </nav>
    </header>
  );
}
