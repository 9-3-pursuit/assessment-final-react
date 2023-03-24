 import { useState, useEffect } from 'react';

// export default function Locations() {
//   const [locations, setLocations] = useState([]);
//   const [showLocations, setShowLocations] = useState(false);
//   const [sortOrder, setSortOrder] = useState('name');

//   useEffect(() => {
//     async function fetchLocations() {
//       const response = await fetch('https://resource-ghibli-api-pursuit.onrender.com/locations');
//       const data = await response.json();
//       setLocations(data);
//     }
//     fetchLocations();
//   }, []);

//   function toggleLocations() {
//     setShowLocations(prevState => !prevState);
//   }

//   function sortLocations(sortType) {
//     setSortOrder(sortType);
//   }

//   const sortedLocations = [...locations].sort((a, b) => {
//     if (sortOrder === 'name') {
//       return a.name.localeCompare(b.name);
//     } else if (sortOrder === 'climate') {
//       return a.climate.localeCompare(b.climate);
//     }
//     return 0;
//   });
  
// const locationsList = (
//     <ul>
//       {sortedLocations.map((location) => (
//         <li key={location.id}>
//           <h3>{location.name}</h3>
//           <ul>
//             <li>Climate: {location.climate}</li>
//             <li>Terrain: {location.terrain}</li>
//             <li>Surface Water: {location.surface_water}</li>
//             <li>Residents:
//               <ul>
//                 {location.residents.map((resident) => (
//                   <li key={resident}>
//                     <a href={resident} target="_blank" rel="noreferrer">{resident}</a>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           </ul>
//         </li>
//       ))}
//     </ul>
//   );
  
//   return (
//     <div className="locations">
//       <h2>List of Locations</h2>
//       <button onClick={toggleLocations}>{showLocations ? 'Hide Locations' : 'Show Locations'}</button>
//       {showLocations && sortedLocations.length > 0 ? locationsList : null}
//       <div>
//         <button onClick={() => sortLocations('name')}>Sort by Name</button>
//         <button onClick={() => sortLocations('climate')}>Sort by Climate</button>
//       </div>
//     </div>
//   );
  
  

//  }

export default function Locations() {
    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(true);
    const [sortBy, setSortBy] = useState("");
  
    useEffect(() => {
      async function fetchLocations() {
        const response = await fetch("locations.json");
        const data = await response.json();
        setLocations(data);
      }
      fetchLocations();
    }, []);
  
    function toggleLocations() {
      setShowLocations(!showLocations);
    }
  
    function handleSortBy(event) {
      setSortBy(event.target.value);
    }
  
    let sortedLocations = [...locations];
    if (sortBy === "name") {
      sortedLocations.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "climate") {
      sortedLocations.sort((a, b) => a.climate.localeCompare(b.climate));
    } else if (sortBy === "terrain") {
      sortedLocations.sort((a, b) => a.terrain.localeCompare(b.terrain));
    }
  
    return (
      <div>
        <button onClick={toggleLocations}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations && (
          <div>
            <div>
              <label htmlFor="sort-by">Sort by:</label>
              <select id="sort-by" value={sortBy} onChange={handleSortBy}>
                <option value="">---</option>
                <option value="name">Name</option>
                <option value="climate">Climate</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>
            <ul>
              {sortedLocations.map((location) => (
                <li key={location.id}>
                  <h2>{location.name}</h2>
                  <p>Climate: {location.climate}</p>
                  <p>Terrain: {location.terrain}</p>
                  <p>Surface Water: {location.surface_water}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  