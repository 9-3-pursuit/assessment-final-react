import { useState, useEffect } from "react";
import getInfo from "../api/fetch";

export default function Locations() {
    const [showLocations, setShowLocations] = useState(false);
    const [sortStatus, setSortStatus] = useState("unsorted");
    const [locations, setLocations] = useState({
      unsorted: "",
      sorted: false
    });

    useEffect(() => {
      getInfo("locations")
        .then(response => {
          setLocations({...locations, unsorted: response, sorted: JSON.parse(JSON.stringify(response)) });
        }).catch(error => {
          console.log(error);
        })
    }, [])


    function sortLocations(detail) {
     
        const sortLocationArray = locations.sorted.sort(
          (locationDetailA, locationDetailB) => {
            const detailA = locationDetailA[detail].toUpperCase();
            const detailB = locationDetailB[detail].toUpperCase();
            if (detailA < detailB) {
              return -1;
            }
            if (detailA > detailB) {
              return 1;
            }

            return 0;
          }
        );
        setSortStatus("sorted")
        setLocations({...locations, sorted: sortLocationArray})
    }

    function toggleShowLocations() {
      setShowLocations(!showLocations);
      setSortStatus("unsorted")
    }
    return (
      <div className="locations flex flex-col items-center mx-4">
        <span className="text-[30px] font-medium">List of Locations</span>
        <div>
          <button
            onClick={toggleShowLocations}
            className="border rounded-[3px] border-gray-400 text-[10px] p-1 px-4 font-bold hover:outline outline-1 outline-[turquoise]"
          >
            {showLocations ? "Hide Locations" : "Show Locations"}
          </button>
          {showLocations && (
            <>
              <button
                onClick={() => sortLocations("name")}
                className="border rounded-[3px] border-gray-400 text-[10px] p-1 px-4 font-bold hover:outline outline-1 outline-[turquoise] "
              >
                Sort by Name
              </button>
              <button
                onClick={() => sortLocations("climate")}
                className="border rounded-[3px] border-gray-400 text-[10px] p-1 px-4 font-bold hover:outline outline-1 outline-[turquoise] "
              >
                Sort by Climate
              </button>
              <button
                onClick={() => sortLocations("terrain")}
                className="border rounded-[3px] border-gray-400 text-[10px] p-1 px-4 font-bold hover:outline outline-1 outline-[turquoise] "
              >
                Sort by Terrain
              </button>
            </>
          )}
        </div>
        <ul className="flex mt-8">
          {showLocations &&
            locations[sortStatus].map((location) => {
              return (
                <li key={location.id} className="flex">
                  <ul className="flex flex-col w-full space-y-4">
                    <li>
                      Name: <span className="ml-[20%]">{location.name}</span>
                    </li>
                    <li>
                      Climate:
                      <span className="ml-[20%]">{location.climate}</span>
                    </li>
                    <li>
                      Terrain:
                      <span className="ml-[20%]">{location.terrain}</span>
                    </li>
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
    );
}