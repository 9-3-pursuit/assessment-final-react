import { useState } from "react";
import "./People.css"

export default function People() {
    const [person, setPerson] = useState([])
    const [selectedPerson, setSelectedPerson] = useState('')
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const PEOPLE_URL = "https://resource-ghibli-api-pursuit.onrender.com/people/"

    function handleTextChange(event) {
        setSelectedPerson(event.target.value.slice(0,1).toUpperCase() + event.target.value.slice(1).toLowerCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${PEOPLE_URL}?name=${selectedPerson}`)
        .then((res) => res.json())
        .then((response) => setPerson(response));
            setSelectedPerson('')
            setToggleSwitch(true)
    }

    return (
        <div className="people">
            <h1>Search for a Person</h1> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={selectedPerson}
                    placeholder="Search for a Person"
                    onChange={handleTextChange}
                    id="name"
                /> 
                <button>Submit</button>
            </form>
            <article className="handleToggle">
                {!toggleSwitch ? (null) : ((person.length !== 0) ? ( 
                <div>
                    <p><span>Name:</span> {person[0].name}</p>
                    <p><span>Age:</span> {person[0].age}</p> 
                    <p><span>Gender:</span> {person[0].gender}</p>
                </div>
                ) : ("Not Found")
                )}
            </article> 
        </div>
    )
}