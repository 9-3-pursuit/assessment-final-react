import { useState, useEffect } from "react"
import fetchCall from "../fetchCall"
import Person from "./Person"
export default function People () {
    const [people, setPeople] = useState(null)
    const [person, setPerson] = useState([])
    useEffect(()=> {
        fetchCall("people")
        .then((response) => {
            setPeople(response)
            console.log(response)
        })

    },[])
    function searchPerson (e) {
        e.preventDefault()
        setPerson(people.filter(individual => individual.name === e.target[0].value))
    }
    return(<>
    <div className="people">
        <h2>Search for a Person</h2>
        <div className="form">
        <form  onSubmit={searchPerson} className="people-search">
            <input type="text"></input>
            <button type="submit">Submit</button>
        </form>
        {person.length !==0 ? 
        <Person person={person} />: <p>Not Found</p>}
        </div>
    </div>
    </>)
}