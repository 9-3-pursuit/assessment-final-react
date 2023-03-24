import { useState, useEffect} from "react"; 
import "./Locations.css"

export default function Locations() { 
  const [showLocations, setShowLocations] =useState(true);
  const [locations, setLocations] = useState([]);
  const [description, setDescription] = useState("")
  const [sepLocation, setSepLocation] = useState([])
  const LOCATION_URL = "https://resource-ghibli-api-pursuit.onrender.com/locations/" 

  useEffect(() => {
    fetch(`${LOCATION_URL}`)
    .then((res) => res.json())
    .then((response) => setSepLocation(response));
}, []);
 
  
  function handleClick() {
    setShowLocations(!showLocations);
    console.log(sepLocation);
      if (showLocations) {
        fetch (`https://resource-ghibli-api-pursuit.onrender.com/locations`)
        .then((res)=> res.json())
        .then((response) => setLocations(response));

      setShowLocations(false)
    } else {
      setShowLocations(true)
    }
  }
 
  const sortBy = (place) => {
    setLocations(locations.sort((a, b) => {
      if (a[place] < b[place]) {
          return -1;
      } else if (a[place] < b[place]) {
          return 1;
      } else {
          return 0;
      }
          
    }))

    setDescription(place)
  }

  return (
    <div className="locations"> 
      <h1>List of Locations</h1> 
        {!showLocations ? (
      <div>
        <div className="sortBy">
          <button onClick={handleClick} className="locationButton">{showLocations ? (null) : (<h4>Hide Locations</h4>)}</button>
          <button onClick={() => sortBy("name")} className="locationButton"><h4>Sort by Name</h4></button>
          <button onClick={() => sortBy("climate")} className="locationButton"><h4>Sort by Climate</h4></button> 
          <button onClick={() => sortBy("terrain")} className="locationButton"><h4>Sort by Terrain</h4></button> 
        </div>

      <ul className="allLocations">
        {locations.map((location, i) => (
          <ul key={i} className="innerList"> 
            <li className="list"><span> <strong>Name: </strong></span> {location.name}</li>
            <li className="list"><span><strong>Climate: </strong></span> {location.climate}</li>
            <li className="list"><span><strong> Terrain: </strong></span> {location.terrain}</li>
          </ul>
        ))}
      </ul>
                          
      {description ? (`Sorted by ${description}`) : null}
      </div>
      ) : 
      <button onClick={handleClick} className="locButton">{showLocations ? (<h4>Show Locations</h4>) : (null)}</button>}
    </div>
  )
}
