import { useState, useEffect } from 'react'
import {getPeople} from '../API/Fetch'

const PeoplePage = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople()
            .then((data) => {
                setPeople(data)
                console.log('people',data)
        })
    })

    return null
}

export default PeoplePage