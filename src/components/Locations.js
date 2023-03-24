import { useState } from "react"

const Locations = ({ handleClick, locations }) => {
    const [hide, setHide] = useState(false)

    return (
       <div className="locations">
        <h2>List of Locations</h2>
            <button onClick={() => { setHide(!hide); handleClick() }}>
                {hide ? ("Hide Locations") : ("Show Locations")}</button>
            {hide ? (
                locations.map((location) => {
                    return (
                        <div className="card">
                            <ul>
                                <li>Name: {location.name}</li>
                                <li>Climate: {location.climate}</li>
                                <li>Terrain: {location.terrain}</li>
                            </ul>
                        </div>
                    )
                })  

            ) : null}
       </div>
    )
}

export default Locations

