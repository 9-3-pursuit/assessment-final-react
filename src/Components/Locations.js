import React, { useEffect, useState } from "react";

const API_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default function Locations() {
  const [showLocation, setShowLocation] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByClimate, setSortByClimate] = useState(false);
  const [sortByTerrain, setSortByTerrain] = useState(false);

  // let selectedLocation = locations && locations.find((location) => {
  //     console.log(location)
  //     return selectedLocationID === location.id
  // });

  useEffect(() => {
    fetch(`${API_URL}/locations`)
      .then((res) => res.json())
      .then((res) => setLocations(res));
  }, []);

  //   function handleSortByName() {
  //    const sortedByName = locations.map((location) => {
  //       return location.name;
  //       });
  //   }

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <section>
        <button
          className="names"
          onClick={() => setSortByName(locations.name)}
        >
          Sort by Name
        </button>

        <button className="climate"onClick={() => setSortByClimate(locations.climate)}>
          Sort By Climate
        </button>
        <button className="terrain" onClick={() => setSortByTerrain(locations.name)}>
            Sort By Terrain
        </button>
        <button onClick={() => setShowLocation((oldLocation) => !oldLocation)}>
          {showLocation ? "Hide Location" : "Show Location"}
        </button>
        <ul>
          {locations.map((location) => {
            return (
              <div key={location.id}>
                {showLocation ? (
                  <ul>
                    <li>Name: {location.name}</li>
                    <li>Climate: {location.climate}</li>
                    <li>Terrain: {location.terrain}</li>
                  </ul>
                ) : null}
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
