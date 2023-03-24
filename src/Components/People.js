import React from "react"
import { useState, useEffect } from "react"
import { getPeople } from "../Api/fetch";

export default function People() {

    const [person, setPerson] = useState({})
    const [userSelection, setUserSelection] = useState("");
    const [userClick, setUserClick] = useState(false)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getPeople()
            .then((response) => {
                console.log(response)
                setCharacters(response)
                setUserSelection(" ")
            })
            .catch(error => setUserClick(false));


    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(userSelection)
        characters.find((pe) => {
            if (pe.name === userSelection) {
                setPerson(pe)
                setUserClick(true)
            }
            return (
                null
            )
        })
    }

    function handleTextChange(event) {
        setUserSelection(event.target.value.slice(0, 1)
            .toUpperCase() + event.target.value.slice(1)
                .toLowerCase());

    }

    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userSelection}
                    placeholder="Search for a person"
                    onChange={handleTextChange}
                    id="name"
                />
                <button>Submit</button>
            </form>

            <article className="handleuserclick">
                {
                    !userClick ? ("Not Found") : (

                        (person.length !== 0) ? (
                            <div>
                                <p>Name: {person.name}</p>
                                <p>Age: {person.age}</p>
                                <p>Gender: {person.gender}</p>
                                <p>Eye Color: {person.eye_color}</p>
                                <p>Hair Color: {person.hair_color}</p>
                            </div>) : ("Not Found")
                    )}
            </article>

        </div>
    )
}
