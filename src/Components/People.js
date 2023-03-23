import React, { useState } from "react";

export default function People() {
  console.log("test");

  const [search, setSearch] = useState(""); // search for person
  const [person, setPerson] = useState([]); // selected person via user
  const [found, setFound] = useState(false); // state for no results found, search error

  function handlePersonSubmit(event) {
    event.preventDefault();
    fetch(` https://resource-ghibli-api-pursuit.onrender.com/people`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setFound(false);
        setPerson(response.results);
      })
      .catch((error) => {
        // console.log(error)
        setFound(true);
      });

    // selectedPerson();
    // setSearch("");
  }

  return (
    <div className="people">
      <h2> Search for a Person🤔 </h2>
      <form onSubmit={handlePersonSubmit}>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search...🎥"
        />
        <button>Submit</button>
      </form>
      {!!Object.keys(person).length && !found && (
        <section>
          <h3>Name: {found.name}</h3>
          <p>Age: {found.age}</p>
          <p>Eye Color: {found.eye_color}</p>
        </section>
      )}
      {found && <h2>Not Found</h2>}
    </div>
  );
}
