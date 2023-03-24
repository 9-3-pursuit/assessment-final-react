export default function LocationCard({location}) {
   
    return (
        <ul>
           <li className="details">Name: {location.name} </li>
           <li className="details">Climate: {location.climate}</li>
           <li className="details">Terrain: {location.terrain}</li>
        </ul>
    )
}