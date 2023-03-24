import { useState, useEffect } from "react";
import Nav from "./Nav";

export const People = () => {
    const [people, setPeople] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [results,setResults] = useState([]);

    const handleChange = (e) => {
        setSearchVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResults(people.filter((person) => person.name.includes(searchVal)));
        setSearchVal("");

    }
    useEffect(() => {fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
    .then((results) => results.json())
    .then((response) => setPeople(response))},[]);
    return <div>
        <Nav />
        <div className="people">
            <h1>Search for a Person</h1>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Search</button>
            <div>
                {results.length != 0 ?(results.map((res) => 
                    <article>
                        <h3>Name: {res.name}</h3>
                        <p>Age: {res.age}</p>
                        <p>Eye Color: {res.eye_color}</p>
                        <p>Hair Color: {res.hair_color}</p>
                    </article>)):(<h2>Not Found</h2>)}
            </div>
        </div>
    </div>
}

export default People;