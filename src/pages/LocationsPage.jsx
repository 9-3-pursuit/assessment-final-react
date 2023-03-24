import { useState, useEffect } from "react";
import LocationCard from "../components/LocationCard";

const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"

export default function LocationsPage() {
    const [clicked, setClicked] = useState(false);
    const [locations, setLocations] = useState([]);

    function handleClick() {
        setClicked(!clicked)
    }

    function getLocations() {
        return fetch(`${baseURL}/locations`)
            .then((response) => response.json())
    }
    function handleSortByName() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.name > locationB.name) return 1
            if (locationA.name < locationB.name) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByClimate() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.climate > locationB.climate) return 1
            if (locationA.climate < locationB.climate) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByTerrain() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.terrain > locationB.terrain) return 1
            if (locationA.terrain < locationB.terrain) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    useEffect(() => {
        getLocations()
            .then(response => {
                setLocations(response)
            })
            // .catch((error) => {
            //     console.log(error)
            // })
    }, [])

    return (
        <div className="locations">
            <h1>List of Location</h1>
            <button onClick={ handleClick }>
                {clicked ? "Hide Locations" : "Show Locations"}
            </button>
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByClimate}>Sort by Climate</button>
            <button onClick={handleSortByTerrain}>Sort by Terrain</button>

            <ul className="details">
                {clicked ? locations.map((location, i) => {
                    return(
                        <li key={location.id}><LocationCard location={location} /></li>
                )}) : null}
            </ul>
        </div>
    )

}

