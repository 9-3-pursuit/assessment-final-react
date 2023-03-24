import { useState, useEffect } from "react";
import useGhibliData from "../../hooks/useGhibliData";
import { sortByProperty } from "../../utils/sortData";

const Location = ({ location }) => {
  return (
    <li key={location.id}>
      <ul>
        <li>
          <span>Name: </span> <span>{location.name}</span>
        </li>
        <li>
          <span>Climate: </span> <span>{location.climate}</span>
        </li>
        <li>
          <span>Terrain: </span> <span>{location.terrain}</span>
        </li>
      </ul>
    </li>
  );
};

const LocationList = ({ locations }) => {
  return (
    <ul>
      {locations.map((location) => {
        return <Location key={location.id} location={location} />;
      })}
    </ul>
  );
};

const SortingButtons = ({ sortLocations }) => {
  return (
    <>
      <button
        className="inline-block rounded bg-slate-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={() => sortLocations("name")}
      >
        Sort by Name
      </button>
      <button
        className="inline-block rounded bg-slate-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={() => sortLocations("climate")}
      >
        Sort by Climate
      </button>
      <button
        className="inline-block rounded bg-slate-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={() => sortLocations("terrain")}
      >
        Sort by Terrain
      </button>
    </>
  );
};

const Locations = () => {
  const ghibliLocations = useGhibliData("locations");
  const [sortedLocations, setSortedLocations] = useState(ghibliLocations);
  const [toggleShowLocations, setToggleShowLocations] = useState(true);

  // Ask Myra or Angie about this after the test
  useEffect(() => {
    setSortedLocations(ghibliLocations);
  }, [ghibliLocations]);

  const toggleLocationsList = () => {
    setToggleShowLocations(!toggleShowLocations);
  };

  const sortLocations = (type) => {
    setSortedLocations(sortByProperty(ghibliLocations, type));
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <div className="buttons py-3">
        <button
          className="inline-block rounded bg-slate-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={toggleLocationsList}
        >
          {toggleShowLocations ? "Show Locations" : "Hide Locations"}
        </button>
        {!toggleShowLocations && <SortingButtons sortLocations={sortLocations} />}
      </div>
      {!toggleShowLocations && <LocationList locations={sortedLocations} />}
    </div>
  );
};

export default Locations;
