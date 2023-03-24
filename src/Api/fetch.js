const URL = "https://resource-ghibli-api-pursuit.onrender.com"


export function getHomePage() {
    return fetch(`${URL}/`).then((response) => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

export function getMovies() {
    return fetch(`${URL}/films`)
        .then((response) => response.json())

}

export function getLocations() {
    return fetch(`${URL}/locations`)
        .then((response) => response.json())
}

export function getPeople() {
    return fetch(`${URL}/people`)
        .then((response) => response.json())
}
