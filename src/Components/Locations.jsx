import { useState, useEffect } from 'react';

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [locationsVisible, setLocationsVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState('name');

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch('https://resource-ghibli-api-pursuit.onrender.com/locations');
      const data = await response.json();
      setLocations(data);
    }
    fetchLocations();
  }, []);

  function toggleLocations() {
    setLocationsVisible(prevState => !prevState);
  }

  function sortByName() {
    setSortOrder('name');
  }

  function sortByClimate() {
    setSortOrder('climate');
  }

  function sortByTerrain() {
    setSortOrder('terrain');
  }

  const sortedLocations = locations.sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'climate') {
      return a.climate.localeCompare(b.climate);
    } else if (sortOrder === 'terrain') {
      return a.terrain.localeCompare(b.terrain);
    }
    return 0;
  });

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      {!locationsVisible ? (
        <div>
          <button onClick={toggleLocations}>Show Locations</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleLocations}>Hide Locations</button>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByClimate}>Sort by Climate</button>
          <button onClick={sortByTerrain}>Sort by Terrain</button>
        </div>
      )}
      {locationsVisible && (
        <ul>
          {sortedLocations.map((location) => (
            <li key={location.id}>
              <h3>{location.name}</h3>
              <ul>
                <li>Climate: {location.climate}</li>
                <li>Terrain: {location.terrain}</li>
                <li>Surface Water: {location.surface_water}</li>
                <li>
                  Residents:
                  <ul>
                    {location.residents.map((resident) => (
                      <li key={resident}>
                        <a href={resident} target="_blank" rel="noreferrer">{resident}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
