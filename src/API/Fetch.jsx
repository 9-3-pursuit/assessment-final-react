const URL = 'https://resource-ghibli-api-pursuit.onrender.com'

export const getMovies = () => {
    return fetch(`${URL}/movies`)
    .then(response => response.json())
}

export const getPeople = () => {
    return fetch(`${URL}/people`)
    .then(response => response.json())
}

export const getLocations = () => {
    return fetch(`${URL}/locations`)
    .then(response => response.json())
}

