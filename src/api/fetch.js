const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export function getAllMovies() {
  return fetch(`${BASE_URL}/films`).then((response) => response.json());
}

export function getAllPeople() {
  return fetch(`${BASE_URL}/people`).then((response) => response.json());
}

export function getAllLocations() {
  return fetch(`${BASE_URL}/locations`).then((response) => response.json());
}
