export default function fetchCall(endPoint) {
    return fetch(`https://resource-ghibli-api-pursuit.onrender.com/${endPoint}`).then((response) => response.json());
}