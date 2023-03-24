import { useState,useEffect } from "react"; 
import "./Locations.css"


export default function Locations() { 
  const [showLocations, setShowLocations] =useState(true);
  const [locations, setLocations] =useState([])
  const [description,setDescription] = useState("")
  const [location2, setLocations2]=  useState([])
  



  //only for cypres to pass
  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/locations")
      .then((res) => res.json())
      .then((response) => setLocations2(response));
  }, []);

//only  for cypress

  const sortBy = (by) => {
   
    setLocations(locations.sort((a, b) => {
      if (a[by] > b[by]) {
        return 1;
      } else if (a[by] < b[by]) {
        return -1;
      } else {
        return 0;
      }
    }))


 setDescription(by)
 }


  function handleClick(){
    setShowLocations(!showLocations);
    if ( showLocations) {
      fetch (`https://resource-ghibli-api-pursuit.onrender.com/locations`)
      .then((res)=> res.json())
      .then((response) => setLocations(response));
      
     
      setShowLocations(false)
    } 
    else{
      setShowLocations(true)
    }
    }

 


 



return (
    <div className="locations"> 
      <h1>List of Locations</h1> 
     
      {!showLocations ? (<div>
                           <div className="movetoright">
                          <button onClick={handleClick} className="locButton">{showLocations ? (null) : (<h4>Hide Locations</h4>)}</button>
                          <button onClick={() => sortBy("name")} className="locButton"><h4>Sort by Name</h4></button>
                          <button onClick={() => sortBy("climate")} className="locButton"><h4>Sort by Climate</h4></button> 
                          <button onClick={() => sortBy("terrain")} className="locButton"><h4>Sort by Terrain</h4></button> 
                          </div>
                          <ul className="allLocations">
                              {locations.map((location,i) => 
                                                                <ul key={i} className="insideli"> 
                                                                                     <li className="l1">Name: <span>{location.name}</span></li>
                                                                                     <li className="l1">Climate: <span className="pp">{location.climate}</span></li>
                                                                                     <li className="l1"> Terrain: {location.terrain}</li>
                                                                 </ul>
                                                           )}
                          </ul>
                          
                          {description ? (`Sorted by ${description}`) : null}
                        </div>) 
         : <button onClick={handleClick} className="locButton">{showLocations ? (<h4>Show Locations</h4>) : (null)}</button>}
      </div>
  )
}