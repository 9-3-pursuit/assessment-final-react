import React, { useEffect, useState } from 'react';
import './Locations.css';

const BASE_URL = 'https://ghibliapi.herokuapp.com/locations';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  const toggleLocations = () => {
    setShowLocations(!showLocations);
  };

  const sortByName = () => {
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));
    setLocations(sortedLocations);
  };

  const sortByClimate = () => {
    const sortedLocations = [...locations].sort((a, b) => a.climate.localeCompare(b.climate));
    setLocations(sortedLocations);
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={toggleLocations}>
        {showLocations ? 'Hide Locations' : 'Show Locations'}
      </button>
      {showLocations && (
        <>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByClimate}>Sort by Climate</button>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>
                <ul>
                  <li>Name: {location.name}</li>
                  <li>Climate: {location.climate}</li>
                  <li>Terrain: {location.terrain}</li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default LocationsPage;
