import React, { useState, useEffect } from "react";
import Person from "./Person";

const URL = "https://resource-ghibli-api-pursuit.onrender.com";

function filterPeople(search, people) {
  return people.filter((person) => {
    return person.name.toLowerCase().match(search.toLowerCase());
  });
}

export default function People() {
  const [people, setPeople] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleTextChange = (event) => {
    const name = event.target.value;
    const result = name.length ? filterPeople(name, people) : people;
    setUserSearch(name);
    setSelectedPerson(result[0] || null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = userSearch.length ? filterPeople(userSearch, people) : people;
    if (result.length) {
      setSelectedPerson(result[0]);
      setUserSearch("");
      return (
        <>
          <Person person={result[0]} />
        </>
      );
    } else {
      setSelectedPerson(null);
      setUserSearch("");
      return (
        <>
          <br />
          <p>Not Found</p>
        </>
      );
    }
  };
  
  

  useEffect(() => {
    fetch(`${URL}/people`)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="people">
      <article>
        
        {people.length === 0 ? (
          <p>"Search for a Person"</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="userSearch">
              <h1>Search for a Person</h1>
              <input
                type="text"
                value={userSearch}
                id="userSearch"
                onChange={handleTextChange}
              />
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </label>
          </form>
        )}
        {selectedPerson === null ? (
          <>
            <br />
            <p>Not Found</p>
          </>
        ) : (
          <Person person={selectedPerson} />
        )}
      </article>
    </div>
  );
}
