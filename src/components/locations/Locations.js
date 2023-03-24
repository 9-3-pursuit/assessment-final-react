import React, { useState, useEffect } from "react";
import Location from "./Location";

const URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByClimate, setSortByClimate] = useState(false);
  const [sortByTerrain, setSortByTerrain] = useState(false);

  useEffect(() => {
    fetch(`${URL}/locations`)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        
      })
      .catch((error) => console.error(error));
  }, []);

  const sortedLocations = [...locations].sort((a, b) => {
    if (sortByName) {
      return a.name.localeCompare(b.name);
    } else if (sortByClimate) {
      return a.climate.localeCompare(b.climate);
    } else if (sortByTerrain) {
      return a.terrain.localeCompare(b.terrain);
    } else {
      return 0;
    }
  });
  

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={() => setShowLocations(!showLocations)}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations && (
        <ul className="location-list">
          {sortedLocations.map((location) => (
            <li key={location.id}>
              <ul>
                <span>
                <li>
                  <span>
                    <h3>{location.name}</h3>
                  </span>
                </li>
                <li><span>{location.climate}</span></li>
                </span>

                <li>Terrain: {location.terrain}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      {showLocations && (
        <div className="sort-buttons">
          <button
            onClick={() => {
              setSortByName(true);
              setSortByClimate(false);
              setSortByTerrain(false);
            }}
          >
            Sort by Name
          </button>
          <button
            onClick={() => {
              setSortByName(false);
              setSortByClimate(true);
              setSortByTerrain(false);
            }}
          >
            Sort by Climate
          </button>
          <button
            onClick={() => {
              setSortByName(false);
              setSortByClimate(false);
              setSortByTerrain(true);
            }}
          >
            Sort by Terrain
          </button>
        </div>
      )}
    </div>
  );
}
