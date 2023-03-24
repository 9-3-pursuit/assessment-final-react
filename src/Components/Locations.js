import { useEffect, useState } from "react";
import { getAllLocations } from "../api/fetch";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    getAllLocations()
      .then(setLocations)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortByType = (type) => {
    const sortedType = [...locations].sort((a, b) => {
      return a[type].localeCompare(b[type]);
    });
    setLocations(sortedType);
    //   or  setLocations([...locations].sort((a, b) => a[sorter].localeCompare(b[sorter])))
  };

  return (
    <main className="locations">
      <h2>List of Locations</h2>
      <button onClick={() => setShowLocation(!showLocation)}>
        {showLocation ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocation && (
        <div>
          <button onClick={() => sortByType("name")}>Sort by Name</button>
          <button onClick={() => sortByType("climate")}>Sort by Climate</button>
          <button onClick={() => sortByType("terrain")}>Sort by Terrain</button>
          <ul>
            {locations.map((location) => {
              return (
                <li key={location.id}>
                  <ul className="details">
                    <li>
                      <span>Name:</span> <span>{location.name}</span>
                    </li>
                    <li>
                      <span>Climate:</span> <span>{location.climate}</span>
                    </li>
                    <li>
                      <span>Terrain:</span> <span>{location.terrain}</span>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Locations;