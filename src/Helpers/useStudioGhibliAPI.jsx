import { useState, useEffect } from "react";

export default function useStudioGhibliAPI(endpoint) {
  const [endpointData, setEndPointData] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        `https://resource-ghibli-api-pursuit.onrender.com/${endpoint}`
      );
      const result = await response.json();
      setEndPointData(result);
    };

    fetchResults();
  }, [endpoint]);

  return endpointData;
}
