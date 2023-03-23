import React, {useState, useEffect} from "react"

export default function Locations(){

    const [detail, setDetail] = useState([]);
    const [show, setShow] = useState(false);

    const dataCopy = [...detail];

    function sortByName(){
        setDetail(
            dataCopy.sort((a,b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                return 0;
            })
        )
    };

    function sortByClimate(){
        setDetail(
            dataCopy.sort((a,b) => {
                if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;
                if(a.climate.toLowerCase() > b.climate.toLowerCase()) return 1
                return 0;
            })
        )
    };

    function sortByTerrain(){
        setDetail(
            dataCopy.sort((a,b) => {
                if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;
                if(a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1
                return 0;
            })
        )
    };

    useEffect(() => {
fetch("./locations.json")
        
          .then((res) => res.json())
          .then((detail) => {
            
            setDetail(detail);
          })
          .catch((err) => console.log(err));
      }, []);

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={() => setShow(!show)}>{show ? "Hide Locations" : "Show Locations"}</button>
            {show ? (
                <button type="submit" onClick={sortByName}>
                Sort By Name
                </button>
            ) : null}
            {show ? (
                <button type="submit" onClick={sortByClimate}>
                Sort By Climate
                </button>
            ) : null}
            {show ? (
                <button type="submit" onClick={sortByTerrain}>
                Sort By Terrain
                </button>
            ) : null}
            
            
            <ul>
                {show && detail && detail.map((item) => (
                    <li key={item.id}>
                        <ul>
                        <li><strong>Name: </strong>{item.name}</li>
                            <li><strong>Climate: </strong>{item.climate}</li>
                            <li><strong>Terrain: </strong> {item.terrain}</li>
                        </ul>
                    </li>
                )) }
            </ul>
        </div>
    )
}