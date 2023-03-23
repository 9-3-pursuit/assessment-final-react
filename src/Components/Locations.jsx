import { useState, useEffect } from "react";
import { getLocation } from "./api/fetch";

export default function Locations () {
    const [locations, setLocations] = useState();
    const [showLocations, setShowLocations] = useState(false)

    useEffect(() => {
        getLocation()
        .then((data) => {
            setLocations(data);
        })
        .catch((error) => console.log(error));
    }, [] )

    function toggleShowLocation () {
        setShowLocations(!showLocations)
    }

    function sortBy (sorter) {
        setLocations([...locations].sort((a, b) => a[sorter].localeCompare(b[sorter])))
    }

    return (
        <main className="locations">
            <h2>List of Locations</h2>
            {showLocations ? 
            <div>
                <button onClick={toggleShowLocation}>Hide Locations</button>
                <button onClick={()=>sortBy("name")}>Sort by Name</button>
                <button onClick={()=>sortBy("climate")}>Sort by Climate</button>
                <button onClick={()=>sortBy("terrain")}>Sort by Terrain</button>
            </div>
            : <button onClick={toggleShowLocation}>Show Locations</button> }
            { locations && showLocations ? 
                <ul>
                {locations.map((location, index) => { return (
                    <li key={index}>
                            <ul>
                                <li><span><strong>Name: </strong></span><span>{location.name}</span></li>
                                <li><span><strong>Climate: </strong></span><span>{location.climate}</span></li>
                                <li><span><strong>Terrain: </strong></span><span>{location.terrain}</span></li>
                            </ul>
                    </li>
                )})}
                </ul>
            : null}
        </main>
    )
}