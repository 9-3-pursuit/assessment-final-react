const URL = "https://resource-ghibli-api-pursuit.onrender.com";

export function getMovies () {
    return (fetch(`${URL}/films`).then((response) => response.json()))
}

export function getPeople () {
    return (fetch(`${URL}/people`).then((response) => response.json()))
}

export function getLocation () {
    return (fetch(`${URL}/locations`).then((response) => response.json()))
}