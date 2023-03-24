import { useEffect, useState } from "react"
import Location from "./Location"
import { getAllLocations } from "./fetch"

export default function LocationsPage() {
    const [clicked, setClicked] = useState(false)
    const [locations, setLocations] = useState([])

    function handleClick() {
        setClicked(!clicked)
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
        getAllLocations()
        .then(response => {
            setLocations(response)
        })
    }, [])

  return (
    <section className='locations'>
        <h1>List of Locations</h1>
        <button onClick={handleClick}>{clicked ? "Hide Locations" : "Show Locations"}</button>
        {clicked ? 
        <>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByClimate}>Sort by Climate</button>
        <button onClick={handleSortByTerrain}>Sort by Terrain</button>
        </>
    : null}
        <ul className="details">
            {clicked ? locations.map((location) => {
                return (
                    <li key={location.id}><Location location={location} /></li>
            )}) : null }
        </ul>
    </section>
  )
}