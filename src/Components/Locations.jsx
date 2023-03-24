import { useState,useEffect } from "react";
import "./Location.css"

export default function Locations() { 
    const [showLocations, setShowLocations] =useState(true);
    const [locations, setLocations] =useState([])
    const [description,setDescription] = useState("")
    const [cyp,setCyp] = useState([])
   
    useEffect(() => {
      fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
        .then((res) => res.json())
        .then((response) => setCyp(response));
    }, []);
    
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
  
  
   setDescription("name")
   }
  
  
   const sortByClimate = () => {
     
      setLocations(locations.sort((a,b)=>{
          if (a.climate < b.climate) {
              return -1;
            }
            if (a.climate > b.climate) {
              return 1;
            }
            return 0;
      } ))
  
  
   setDescription("climate")
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
  
  
   setDescription("terrain")
   }
  
  
  return (
      <div className="locations"> 
        <h1>List of Locations</h1> 
        <br></br>
        <button onClick={handleClick}>{showLocations ? ("Show Locations") : ("Hide Locations")}</button>
        {!showLocations ? (<div>
                            <button onClick={sortByName}>Sort by Name</button>
                            <button onClick={sortByClimate}>Sort by Climate</button> 
                            <button onClick={sortByTerrain}>Sort by Terrain</button> 
                            <br></br>
                            <ul className="allLocations">
                              {locations.map(location => (<li key={location.id}> <ul  className="insideli"> <li><span>Name:</span> {location.name}</li>  <li><span>Climate: {location.climate}</span></li>  <li><span>Terrain:</span> {location.terrain}</li></ul> </li>))}
                          </ul>
                            {description ? (`Sorted by ${description}`) : null}
                          </div>) 
           :null}
        </div>
    )
  }