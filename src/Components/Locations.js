// "List of Locations" text on page
// button with "Show Locations"
// onClick, text changes to "Hide Locations & pulls all locations from api"
// show locations = getAllMovies
// when "Show Locations" is clicked pull all locations from the API
// each location should include name, climate, and terrain
// use list item to display each location

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
