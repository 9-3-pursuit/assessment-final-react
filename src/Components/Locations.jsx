export default function Locations ({locations, showLocations, sortBy, toggleShowLocation }) {
    return (
        <main className="locations">
            <h2>List of Locations</h2>
            {showLocations ? 
            <div>
                <button onClick={toggleShowLocation}>Hide Locations</button>
                <button onClick={()=>sortBy("name")}>Sort by Name</button>
                <button onClick={()=>sortBy("climate")}>Sort by Climate</button>
                <button onClick={()=>sortBy("terrain")}>Sort by Terrain</button>
            </div>
            : <button onClick={toggleShowLocation}>Show Locations</button> }
            { locations && showLocations ? 
                <ul>
                {locations.map((location, index) => { return (
                    <li key={index}>
                            <ul>
                                <li><span><strong>Name: </strong></span><span>{location.name}</span></li>
                                <li><span><strong>Climate: </strong></span><span>{location.climate}</span></li>
                                <li><span><strong>Terrain: </strong></span><span>{location.terrain}</span></li>
                            </ul>
                    </li>
                )})}
                </ul>
            : null}
        </main>
    )
}