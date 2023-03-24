import { useState, useEffect } from "react";
import { getAllLocations } from "../api/fetch";

function Locations() {
  const [allLocations, setAllLocations] = useState([]);
  const [showToggle, setShowToggle] = useState(false);
  const [sortedLocation, setSortedLocation] = useState(false);

  useEffect(() => {
    getAllLocations()
      .then((data) => {
        setAllLocations(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function toggleLocations() {
    setShowToggle(!showToggle);
  }

  function handleSort(type) {
    const sortedType = allLocations.sort((a, b) => a.localeCompare(b));
    setSortedLocation(sortedType);
  }

  return (
    <div className="locations">
      <h1> List of Locations </h1>
      <button onClick={toggleLocations}>
        {" "}
        {showToggle ? "Hide Locations" : "Show Locations"}{" "}
      </button>
      {showToggle ? (
        <div>
          {/* <button onClick={handleSort(sortedLocation.name)}>
            {" "}
            Sort by Name
          </button>
          <button onClick={handleSort(sortedLocation.climate)}>
            Sort by Climate{" "}
          </button>
          <button onClick={handleSort(sortedLocation.terrain)}>
            Sort by Terrain
          </button> */}

          <ul>
            {allLocations.map((place) => {
              return (
                <ul key={place.id}>
                  <li> {place.name}</li>
                  <li>{place.climate}</li>
                  <li>{place.terrain}</li>
                </ul>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Locations;
