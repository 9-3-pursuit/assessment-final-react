import { useState } from "react"

const Locations = ({ handleClick, locations, setLocations }) => {
    const [hide, setHide] = useState(false);
    
    const sortLocations = (type) => {
        setLocations([...locations].sort((a, b)=> a[type].localeCompare(b[type])));
    }

    function showFilters(){
        return (
            <>
                <button onClick={()=>{setHide(!hide)}}>Hide Locations</button>
                <button onClick={()=>sortLocations("name")}>Sort by Name</button>
                <button onClick={()=>sortLocations("climate")}>Sort by Climates</button>
                <button onClick={()=>sortLocations("terrain")}>Sort by Terrain</button>
            </>
        )
    }

    return (
        <main className="locations">
        <h2>List of Locations</h2>
            {hide ? showFilters() :
                (<button onClick={() => {setHide(!hide); handleClick()}}>
                    {hide ? ("Hide Locations") : ("Show Locations")}
                </button>)}

            {hide ? (
                <ul>
                    {locations.map((location, i) => {
                    return (
                        <li key={i}>
                            <ul>
                                <li><span>Name:</span> <span>{location.name}</span></li>
                                <li><span>Climate:</span> <span>{location.climate}</span></li>
                                <li><span>Terrain:</span> <span>{location.terrain}</span></li>
                            </ul>
                        </li>
                    )
                })}
                </ul>) : null}
        </main>
    )
}

export default Locations

