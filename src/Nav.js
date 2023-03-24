import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="nav">
            <nav>
                <Link to="/">
                <img src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" alt="logo"/>
                </Link>    

                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
}