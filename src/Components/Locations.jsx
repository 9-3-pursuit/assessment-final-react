import { useState, useEffect } from "react"
import { getLocations } from "../API/Fetch"

const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
            .then((data) => {
                setLocations(data)
                console.log('locations',data)
        })
    },[])

}
export default Locations