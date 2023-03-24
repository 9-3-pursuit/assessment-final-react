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

    function sortLocationsByName(locations) {
        return locations.sort((a, b) => a.name.localeCompare(b.name))
    }

    function handleSortByName() {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((locationsData) => {
                const locationsSortedByName = sortLocationsByName(locationsData);
                setLocations(locationsSortedByName);
            });
    }

    function sortLocationsByClimate(locations) {
        return locations.sort((a, b) => a.climate.localeCompare(b.climate))
    }

    function handleSortByClimate() {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((locationsData) => {
                const locationsSortedByClimate = sortLocationsByClimate(locationsData);
                setLocations(locationsSortedByClimate);
            });
    }

    function sortLocationsByTerrain(locations) {
        return locations.sort((a, b) => a.terrain.localeCompare(b.terrain))
    }

    function handleSortByTerrain() {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((locationsData) => {
                const locationsSortedByTerrain = sortLocationsByTerrain(locationsData);
                setLocations(locationsSortedByTerrain);
            });
    }

    function renderLocations() {
        return (
            locations.map((location) => {
                return (
                    <ul>
                        <Location location={location} />
                    </ul>
                )
            })
        )
    }

    return (
        <div className="locations" >
            <h3>List of Locations</h3>
            <button onClick={() => setShowLocations((oldShowLocations) => !oldShowLocations)} >
                {showLocations ? "Hide Locations" : "Show Locations"}
            </button>
            {showLocations ? (
                <button onClick={() => handleSortByName()}>Sort by Name</button>
            ) : null}
            {showLocations ? (
                <button onClick={() => handleSortByClimate()}>
                    Sort by Climate
                </button>
            ) : null}
            {showLocations ? (
                <button onClick={() => handleSortByTerrain()}>Sort by Terrain</button>
            ) : null}
            {showLocations ? (
                renderLocations()
            ) : null}
        </div>
    )
}