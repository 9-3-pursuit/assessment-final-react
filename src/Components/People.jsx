import { useState, useEffect } from "react"
import React
 from "react";
const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com/people"

export default function People() {
    const [userSearch, setUserSearch] = useState("")
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then((response) => response.json())
            .then((peopleData) => setPeople(peopleData))
    }, []);

    function findPersonByName(name) {
        const searchName = name.toLowerCase().trim();
        return people.find(person => person.name.toLowerCase().includes(searchName))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUserSearch("");
        if (!findPersonByName(userSearch)) {
            setError(true);
        } else {
            setPerson(findPersonByName(userSearch))
        }
    }


    return (
       <div className="people">
            <h3>Search for a Person</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userSearch} id="search" onChange={(e) => { setUserSearch(e.target.value) }} />
                <button type="submit" >Submit</button>
            </form>
            {(!!Object.keys(person).length && !error) && (
                <section>
                    <h2>{person.name}</h2>
                    <p>Age: {person.age}</p>
                    <p>Eye Color: {person.eye_color} </p>
                </section>
            )}
            {error && (<h2>Not Found!</h2>)}
        </div>
    )
}