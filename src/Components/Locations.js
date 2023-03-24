//  ! URL -> http://localhost:3000/locations
import React, { useState, useEffect } from "react";

export default function Locations() {
  //   console.log("test");

  const [click, setClick] = useState(false); // state for the click button
  const [locations, setLocations] = useState([]); // state for locations info

  // handle for toggle on click button
  function handleBtnClick() {
    setClick(!click);
  }
  // fetches all location data & sets the location accordingly
  useEffect(() => {
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
      .then((response) => response.json())
      .then((response) => {
        setLocations(response);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  * all sort functions for sort by buttons as followed :

  // sort by name
  function handleSortForName() {
    let locationsOrderedSetArr = [...locations];
    locationsOrderedSetArr.sort((beforeLocation, afterLocation) => {
      if (beforeLocation.name > afterLocation.name) {
        return 1;
      }
      if (beforeLocation.name < afterLocation.name) {
        return -1;
      }
      return 0;
    });
    setLocations(locationsOrderedSetArr);
  }
  // sort by climate
  function handleSortForClimate() {
    let climateOrderedSetArr = [...locations];
    climateOrderedSetArr.sort((beforeLocation, afterLocation) => {
      if (beforeLocation.climate > afterLocation.climate) {
        return 1;
      }
      if (beforeLocation.climate < afterLocation.climate) {
        return -1;
      }
      return 0;
    });
    setLocations(climateOrderedSetArr);
  }

  // sort by terrain
  function handleSortForTerrain() {
    let terrainOrderedSetArr = [...locations];
    terrainOrderedSetArr.sort((beforeLocation, afterLocation) => {
      if (beforeLocation.terrian > afterLocation.terrian) {
        return 1;
      }
      if (beforeLocation.terrian < afterLocation.terrian) {
        return -1;
      }
      return 0;
    });
    setLocations(terrainOrderedSetArr);
  }

  // retun displays working sort buttons and toggle button of show & hide
  // return then iterates through the locations to return each element as followed:
  // Name, Climate, Terrain
  return (
    <div className="locations">
      <h1>List of Locations🗺️</h1>
      <button onClick={handleBtnClick}>
        {click ? "Hide Locations😶‍🌫️" : "Show Locations🤗"}
      </button>
      <button onClick={handleSortForName}> Sort by Name </button>
      <button onClick={handleSortForClimate}> Sort by Climate </button>
      <button onClick={handleSortForTerrain}> Sort by Terrain </button>

      {click && (
        <ul>
          {locations.map((place) => (
            <li key={place.id}>
              <ul>
                <li>
                  <span>
                    <strong>Name: </strong>
                  </span>
                  {place.name}
                </li>
                <li>
                  <span>
                    <strong>Climate: </strong>
                  </span>
                  {place.climate}
                </li>
                <li>
                  <span>
                    <strong>Terrain: </strong>
                  </span>
                  {place.terrain}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
