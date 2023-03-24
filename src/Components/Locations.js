import { useState, useEffect } from "react";
import { getLocations } from "../Api/fetch";
import React from "react";

export default function Locations() {
    const [category, setCategory] = useState("")
    const [listLocations, setListLocations] = useState(true);
    const [locations, setLocations] = useState([])


    useEffect(() => {
        getLocations()
            .then((response) => {
                console.log(response)
                setLocations(response)
            })
            .catch(error => console.error(error));

    }, []);

    function handleClick() {
        setListLocations(!listLocations);
        if (listLocations) {
            getLocations()
                .then((response) =>
                    setLocations(response))
            setListLocations(false)
        } else {
            setListLocations(true)

        }

    }

    const sortByName = () => {
        setLocations(locations.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }))
        setCategory("name")
    }
    const sortByClimate = () => {

        setLocations(locations.sort((a, b) => {
            if (a.climate < b.climate) {
                return -1;
            }
            if (a.climate > b.climate) {
                return 1;
            }
            return 0;
        }))

        setCategory("climate")
    }

    const sortByTerrain = () => {

        setLocations(locations.sort((a, b) => {
            if (a.terrain < b.terrain) {
                return -1;
            }
            if (a.terrain > b.terrain) {
                return 1;
            }
            return 0;
        }))

        setCategory("terrain")
    }
    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <br></br>
            <button onClick={handleClick}>{listLocations ? ("Show Locations") : ("Hide Locations")}</button>
            {!listLocations ? (<div>
                <button onClick={sortByName}>Sort by Name</button>
                <button onClick={sortByClimate}>Sort by Climate</button>
                <button onClick={sortByTerrain}>Sort by Terrain</button>
                <br></br>
                <ul>
                    {locations && locations.map(location => (
                        <ul key={location.id}>
                            <li> Name: <span>{location.name} </span></li>
                            <li> Climate: <span>{location.climate}</span>  </li>
                            <li> Terrain: {location.terrain} </li>
                        </ul>
                    ))}
                </ul>

                {category ? (`Sorted by ${category}`) : null}
            </div>)
                : null}
        </div>
    )
}