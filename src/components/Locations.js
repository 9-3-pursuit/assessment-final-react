import { useState } from "react";
import { getLocations } from "../API/Fetch";
import LocationCard from "./LocationCard";

export default function Locations() {
    const [visible, setVisible] = useState(false);
    const [locations , setLocations] = useState([]);

    function handleClick() {
        setVisible(!visible);
        getLocations().then(response => {
            setLocations(response)
         // .catch((error) => {
        //      console.log(error)
        //   })        
        })
    }
    
    const locationDetails = locations.map((location , i) => {
        return (
            <li key={i}><LocationCard location={location} /></li>
        )
           
    })    

    
    function sortByName(){}


    function sortByClimate(){}

    function sortByTerrain(){}
   
    

    return (
        <div className="">
            <h1>List of Locations</h1>
            <div >{!visible ? <button onClick={handleClick}>Show Locations</button> :  
                <div>
                    <button onClick={handleClick}>Hide Locations</button> 
                    <button onClick={sortByName}>Sort by Name</button>
                    <button onClick={sortByClimate}>Sort by Climate</button>
                    <button onClick={sortByTerrain}>Sort by</button>
                </div>  }
                {visible && (
                   <div className="locations">
                        <ul className="locations">{locationDetails}</ul>
                    </div>
                    
                ) }
            </div>
        </div>
      );
  }