const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"

export function getAllMovies () {
    return fetch(`${baseURL}/films`).then((response) => response.json())
}

export function getAllPeople () {
    return fetch(`${baseURL}/people`).then((response) => response.json())
}

export function getAllLocations () {
    return fetch(`${baseURL}/locations`).then((response) => response.json())
}
