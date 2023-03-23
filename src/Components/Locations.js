//"List of Locations" text on page
// button with "Show Locations"
// onClick, text changes to "Hide Locations & pulls all locations from api"
// show locations = getAllMovies
//

import { useState } from "react";
export default function Locations() {
  const [showLocations, setShowLocations] = useState(true);

  function handleClick() {
    setShowLocations(!showLocations);
  }

  return (
    <div className="locations">
      <h1 style={{ textAlignVertical: "center", textAlign: "center" }}>
        List of Locations
      </h1>
      <button onClick={handleClick}>
        {showLocations ? "Show Locations" : "Hide Locations"}
      </button>
    </div>
  );
}
