import { useEffect, useState } from "react";
import Nav from "./Nav";
export const Locations = () => {
    const [visible,setVisibility] = useState(false);
    const [locations,setLocations] = useState([]);
    
    const toggle = (e) => {
        setVisibility(!visible);
    }

    const nameSort = (e) => {
        e.preventDefault();
        setLocations([]);
        let sorted = [...locations];
        sorted.sort((a,b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
            
              // names must be equal
              return 0;
        });
        setLocations(sorted);
    }

    const climateSort = (e) => {
        e.preventDefault();
        setLocations([]);
        let sorted = [...locations];
        sorted.sort((a,b) => {
            const nameA = a.climate.toUpperCase();
            const nameB = b.climate.toUpperCase();
            if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
            
              // names must be equal
              return 0;
        });
        setLocations(sorted);
    }

    const terrainSort = (e) => {
        e.preventDefault();
        setLocations([]);
        let sorted = [...locations];
        sorted.sort((a,b) => {
            const nameA = a.terrain.toUpperCase();
            const nameB = b.terrain.toUpperCase();
            if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
            
              // names must be equal
              return 0;
        });
        setLocations(sorted);
    }
    useEffect(() => {fetch("https://resource-ghibli-api-pursuit.onrender.com/locations")
    .then((results) => results.json())
    .then((response) => setLocations(response))},[]);
    return <div>
        <Nav />
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={toggle}>{visible?("Hide Locations"):("Show Locations")}</button>
            {visible?
            (<div>
                <button type="button" onClick={nameSort}>Sort by Name</button>
                <button type="button" onClick={climateSort}>Sort by Climate</button>
                <button type="button" onClick={terrainSort}>Sort by Terrain</button>
            </div>):(<></>)}

            {visible?(
                <ul>
                    {locations.map((loc) =>
                        <li>
                            <ul>
                                <li>Name: <span>{loc.name}</span> </li>
                                <li>Climate: <span>{loc.climate}</span> </li>
                                <li>Terrain: <span>{loc.terrain}</span> </li>
                            </ul>
                        </li>
                    )}
                </ul>
            ):(<></>)}

        </div>
    </div>
}

export default Locations;