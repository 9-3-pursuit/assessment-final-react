import fetchCall from "../fetchCall";
import { useState, useEffect } from "react";

export const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(false);
    const [sortByName, setSortByName] = useState(false);
    const [sortByTerrain, setSortByTerrain] = useState(false);
    const [sortByClimate, setSortByClimate] = useState(false);


    useEffect(() => {
        fetchCall("locations")
            .then((data) => {
                setLocations(data)
            })
    }, []);
    
    const handleToggleLocations = (e) => {
        e.preventDefault()
        setShowLocations(!showLocations);
        setSortByName(!sortByName);
        setSortByTerrain(!sortByTerrain);
        setSortByClimate(!sortByClimate);
    };

    const handleSortByName = () => {
        setLocations([...locations].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        }));
    };

    const handleSortByClimate = () => {
        setLocations([...locations].sort((a, b) => {
            const climateA = a.climate.toLowerCase();
            const climateB = b.climate.toLowerCase();
            if (climateA < climateB) {
                return -1
            }
            if (climateA > climateB) {
                return 1
            }
            return 0
        }));
    };

    const handleSortByTerrain = () => {
        setLocations([...locations].sort((a, b) => {
            const terrainA = a.terrain.toLowerCase();
            const terrainB = b.terrain.toLowerCase();
            if (terrainA < terrainB) {
                return -1
            }
            if (terrainA > terrainB) {
                return 1
            }
            return 0
        }));
    };


    return (
        <form onSubmit={handleToggleLocations}>
            <main className="locations">
                <h2>Locations</h2>

                <button>
                    {showLocations ? 'Hide Locations' : 'Show Locations'}
                </button>

                {sortByName && (
                    <button type='button' onClick={handleSortByName}>
                        Sort by Name
                    </button>
                )}

                 {sortByClimate && (
                    <button type='button' onClick={handleSortByClimate}>
                        Sort by Climate
                    </button>
                )}

                 {sortByTerrain && (
                    <button type='button' onClick={handleSortByTerrain}>
                        Sort by Terrain
                    </button>
                )}

                <ul>
                    {showLocations &&
                        locations.map((location) => {
                           return  <li key={location.id}>
                                <ul>
                                    <li><span>Name: <span>{location.name}</span></span></li>
                                    <li><span>Climate: <span>{location.climate}</span></span></li>
                                    <li><span>Terrain: <span>{location.terrain}</span></span></li>
                                </ul>                           
                        </li>
                    })
                    }
            

                </ul>

            </main>

        </form>
    )


}