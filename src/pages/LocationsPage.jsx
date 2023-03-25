import { useState, useEffect } from "react";
// import LocationCard from "../components/LocationCard";

const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"

export default function LocationsPage() {
    const [clicked, setClicked] = useState(false);
    const [locations, setLocations] = useState([]);

    function handleClick(e) {
        setClicked(!clicked)
    }

    function getLocations() {
        return fetch(`${baseURL}/locations`)
            .then((response) => response.json())
    }
    function handleSortByName() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.name.toLowerCase() > locationB.name.toLowerCase()) return 1
            if (locationA.name.toLowerCase() < locationB.name.toLowerCase()) return -1
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

            {clicked ? 
            <>
            <button type="button" onClick={handleSortByName}>Sort by Name</button>
            <button type="button" onClick={handleSortByClimate}>Sort by Climate</button>
            <button  type="button" onClick={handleSortByTerrain}>Sort by Terrain</button>
            </>
            : null
                
            }
            

            <ul className="locations">
                {clicked ? locations.map((location) => {
                    return(
                        <ul className="details" key={location.id}>
                            <li><span>Name:</span><span>{location.name}</span></li>
                            <li><span>Climate:</span><span>{location.climate}</span></li>
                             <li><span>Terrain:</span><span>{location.terrain}</span></li>
                        {/* <li key={location.id}><LocationCard location={location} /></li> */}
                        </ul>
                )}) : null}
            </ul>
        </div>
    )

}

