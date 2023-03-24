import React from "react"
import { useState } from "react"

export default function People() {

    const [person, setPerson] = useState([])
    const [userSelection, setUserSelection] = useState("");
    const [userClick, setUserClick] = useState(false)


    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://resource-ghibli-api-pursuit.onrender.com/people/?name=${userSelection}`)
            .then((response) => response.json())
            .then((response) => setPerson(response));

        setUserSelection('')

        setUserClick(true)

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
                    !userClick ? (null) : (

                        (person.length !== 0) ? (
                            <div>
                                <p>Name: {person[0].name}</p>
                                <p>Age: {person[0].age}</p>
                                <p>Eye Color: {person[0].eye_color}</p>
                            </div>) : ("Not found")
                    )}
            </article>

        </div>
    )
}
