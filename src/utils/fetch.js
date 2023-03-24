import axios from "axios";
const ghibliFilms = "https://resource-ghibli-api-pursuit.onrender.com/";

export const fetchGhibliData = async (endpoint) => {
  try {
    const response = await axios.get(`${ghibliFilms}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
