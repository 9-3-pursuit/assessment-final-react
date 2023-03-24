import { getAllPeople } from "../api/fetch";
import { useState, useEffect } from "react";

function People() {
  const [allPeople, setAllPeople] = useState([]); // api data
  const [search, setSearch] = useState(""); // user search state
  const [findPerson, setFindPerson] = useState(""); // state for find a person
  const [error, setError] = useState(""); // state for error handling

  useEffect(() => {
    getAllPeople()
      .then((data) => {
        setAllPeople(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (search) {
      const personFound = allPeople.find((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
      if (personFound) {
        setFindPerson(personFound);
        setError("");
      } else {
        setError("Not Found");
      }
    } else {
      setError("Not Found");
      setFindPerson("");
    }
    setSearch("");
  }

  function handleTextChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="people">
      <h1>Search for a Person </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search"
          value={search}
          onChange={handleTextChange}
        />
        <button>Submit</button>
      </form>
      {findPerson && !error ? (
        <div>
          <h2> Name: {findPerson.name}</h2>
          <h3> Age: {findPerson.age}</h3>
          <h3> Eye Color: {findPerson.eye_color}</h3>
          <h3>Hair Color: {findPerson.hair_color}</h3>
        </div>
      ) : (
        <p> {error}</p>
      )}
    </div>
  );
}

export default People;
