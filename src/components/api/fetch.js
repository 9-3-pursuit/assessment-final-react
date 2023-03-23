const URL = process.env.REACT_APP_API_BASE_URL;

export function getAllFilms() {
    return fetch(`${URL}/films`).then((response) => response.json())
}