export default function fetchCall(endPoint) {
    return fetch(`https://resource-ghibli-api.onrender.com/${endPoint}`).then((response) => response.json());
}