import { useState } from "react";
import useStudioGhibliAPI from "../../Hooks/useStudioGhibliAPI";

export default function Locations() {
  const locationListUnsorted = useStudioGhibliAPI("locations");
  const [isShowing, setIsShowing] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("");

  const toggleIsShowing = () => setIsShowing(!isShowing);

  const handleClick = (e) => setSortCriteria(e.target.value);

  return (
    <main>
      <section className="locations">
        <h2>List of Locations</h2>
        <button onClick={toggleIsShowing}>
          {isShowing ? "Hide" : "Show"} Locations
        </button>
        {isShowing && (
          <div>
            <button value="name" onClick={handleClick}>
              Sort by Name
            </button>
            <button value="climate" onClick={handleClick}>
              Sort by Climate
            </button>
            <button value="terrain" onClick={handleClick}>
              Sort by Terrain
            </button>
          </div>
        )}
        <ul>
          {isShowing &&
            locationListUnsorted
              .sort((a, b) => (a[sortCriteria] > b[sortCriteria] ? 1 : -1))
              .map(({ name, climate, terrain }) => {
                return (
                  <li>
                    <ul>
                      <li>
                        <span>Name:</span>
                        <span>{name}</span>
                      </li>
                      <li>
                        <span>Climate:</span>
                        <span>{climate}</span>
                      </li>
                      <li>
                        <span>Terrain:</span>
                        <span>{terrain}</span>
                      </li>
                    </ul>
                  </li>
                );
              })}
        </ul>
      </section>
    </main>
  );
}
