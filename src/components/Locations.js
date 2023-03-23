import { useState } from "react"

const Locations = () => {
    const [hide, setHide] = useState(false)
    return (
       <div className="locations">
        <h2>List of Locations</h2>
        <button>Show Locations</button>

       </div>
    )
}

export default Locations

