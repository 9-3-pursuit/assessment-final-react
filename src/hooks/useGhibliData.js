// People / Films / Locations / all use the `useEffect` hook to fetch data from the Ghibli API
// and store it in the `data` state variable.
// my thinking was to use one hook for all of them, but I'm not sure if that's the best way to do it

import { useState, useEffect } from "react";
import { fetchGhibliData } from "../utils/fetchData";

export const useGhibliData = (endpoint) => {
  const [ghibliData, setGhibliData] = useState([]);

  useEffect(() => {
    fetchGhibliData(endpoint).then((data) => setGhibliData(data));
  }, [endpoint]);

  return ghibliData;
};
