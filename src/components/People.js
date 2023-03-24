
import {useState} from "react";


export default function People (){
    const [userSearch, setUserSearch] = useState("");
    const [people, setPeople] = useState({});
    const [error, setError] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://resource-ghibli-api.onrender.com/people/?name=${userSearch}`).then(response => response.json()).then((response)=>{
        setError(false)    
            setPeople(response.results[0]);
            setUserSearch("")
    })
        .catch((error) => {
            setError(true);
        });
    }
    return (
        <div>
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userSearch} id="search" onChange={(e) => setUserSearch(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
            {(!!Object.keys(people).length && !error) && (
            <section>
                 <h1>Name: {people.name}</h1>
                 <p>Age: {people.age}</p>
                 <p>Eye Color: {people.eyeColor}</p>
                 <p>Hair Color: {people.hairColor}</p>
            </section>
            )};
            {error && <h2>Not Found</h2>}
        </div>
    )
}