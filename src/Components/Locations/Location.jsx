export default function Location({ location }) {
    return (
        <li>
            <ul>
                <li>Name: {location.name}</li>
                <li>Climate: {location.climate}</li>
                <li>Terrain: {location.terrain}</li>
            </ul>
        </li>
    )
}