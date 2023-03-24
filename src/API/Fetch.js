const URL = "https://resource-ghibli-api-pursuit.onrender.com"

export function getAllMovies() {
    return fetch(`${URL}/films/`).then(response => response.json());
}

export function getOnePerson(name) {
    return fetch(`${URL}/people/?name=${name}`).then(response => response.json());
}

export function getLocations() {
    return fetch(`${URL}/locations`).then(response => response.json());
}