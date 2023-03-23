import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <Link to="/"> Logo </Link>
      <Link to="/movies"> Movies </Link>
      <Link to="/people"> People </Link>
      <Link to="/locations"> Locations </Link>
    </nav>
  );
}
