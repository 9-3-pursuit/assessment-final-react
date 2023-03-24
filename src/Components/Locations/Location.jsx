export default function Location({ location }) {
    return (
        <li key={location.id}>
            <ul>
                <li>Name: <span>{location.name}</span></li>
                <li>Climate: <span>{location.climate}</span></li>
                <li>Terrain: <span>{location.terrain}</span></li>
            </ul>
        </li>
    )
}