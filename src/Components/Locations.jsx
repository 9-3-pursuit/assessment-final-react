import { useState } from "react"; 
import "./Locations.css"

export default function Locations() { 
  const [showLocations, setShowLocations] =useState(true);
  const [locations, setLocations] =useState([])
  const [description,setViewDescription] = useState("")
 
  
    
  
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
  
 const sortByName = () => {
   
    setLocations(locations.sort((a,b)=>{
        
      
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
    } ))


 setViewDescription("name")
 }


 const sortByClimate = () => {
   
    setLocations(locations.sort((a,b)=>{
    

        if (a.climate > b.climate) {
            return 1;
          } else if (a.climate < b.climate) {
            return -1;
          } else {
            return 0;
          }
        }));
   


 setViewDescription("climate")
 }

 const sortByTerrain = () => {
   
    setLocations(locations.sort((a,b)=>{
        if (a.terrain < b.terrain) {
            return -1;
          }
          if (a.terrain > b.terrain) {
            return 1;
          }
          return 0;
    } ))


 setViewDescription("terrain")
 }


 return (
  <div className="locations"> 
    <h1>List of Locations</h1> 
   
    {!showLocations ? (<div>
                         <div className="movingtoright">
                        <button onClick={handleClick} className="locationButton">{showLocations ? (null) : (<h4>Hide Locations</h4>)}</button>
                        <button onClick={sortByName} className="locationButton"><h4>Sort by Name</h4></button>
                        <button onClick={sortByClimate} className="locationButton"><h4>Sort by Climate</h4></button> 
                        <button onClick={sortByTerrain} className="locationButton"><h4>Sort by Terrain</h4></button> 
                        </div>
                        <ul className="viewLocations">
                            {locations.map((location,i) => (
                                            <ul key={i} className="ForInsideLi"> 
                                              <li className="l1">Name: <span> {location.name}</span></li>
                                              <li className="l1">Climate: <span>{location.climate}</span></li>
                                              <li className="l1"> Terrain: {location.terrain}</li>
                                            </ul>
                                                         ))}
                        </ul>
                        
                        {description ? (`Sorted by ${description}`) : null}
                      </div>) 
       : <button onClick={handleClick} className="locationButton">{showLocations ? (<h4>Show Locations</h4>) : (null)}</button>}
    </div>
)
                            }