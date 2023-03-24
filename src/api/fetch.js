const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default async function getInfo(type) {
    const response = await fetch(`${BASE_URL}/${type}`);
    const info = await response.json();
    return info;
}