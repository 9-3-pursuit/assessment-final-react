import React, {useState , useEffect} from "react"

export default function Locations () {
console.log("test")

const [click, setClick] = useState(false)
const [locations, setLocations] = useState([])

function handleBtnClick(){
    setClick(!click)
}
useEffect(()=> {
     fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
    .then((response) => response.json())
      .then((response) => {
        setLocations(response)
        console.log(response);
       
      })
      .catch((error) => {
        //  console.log(error)
       
      });
}, [])
   


    return (
        <div className="locations">
            <h1>List of Locations</h1>
            {/* onClick here --v */}
            <button > Show More
                {/* !showMore ? "Show Locations" : "Hide Locations" */}

            </button>{" "}
            {/* onClick here --v */}
            <button > Sort by Name
                {/* toggleBtn here ? "hide" : "Sort by Name" */}
            </button>
            <div className="locations">
                <ul>
                    {" "}
                    {/* key="" for both li ---v */}
                    <li>
                        <p></p>
                        <p></p>
                        <p></p>
                    </li>
                </ul>
            </div>
            {/* toggleBtn w/ ? operator*/} 
            <div className="locations">
                <ul>
                    {" "}
                     <li >
                    <p></p>
                    <p></p>
                    <p></p>
                </li>
                </ul>
               
            </div>
            {/* null here */}
        </div>
    )
}