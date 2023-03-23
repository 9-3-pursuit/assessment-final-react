const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export function getAllMovies() {
  return fetch(`${BASE_URL}/movies`).then((response) => response.json());
}
