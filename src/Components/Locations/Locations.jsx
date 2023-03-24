import { useEffect, useState } from "react";
import Location from "./Location";

const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com/locations"

export default function Locations() {
    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(false);

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((locationsData) => setLocations(locationsData))
    }, [])

    return (
        <div className="locations" >
            <h3>List of Locations</h3>
            <button onClick={() => setShowLocations((oldShowLocations) => !oldShowLocations)} >
                {showLocations ? "Hide Locations" : "Show Locations"}
            </button>
            {showLocations ? (
                locations.map((location) => {
                    return (
                        <ul>
                            <Location key={location.id} location={location} />
                        </ul>
                    )
                })
            ) : null}
        </div>
    )
}