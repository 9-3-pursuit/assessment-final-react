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
    <main className="people">
      <section>
        <h2>Search for a Person</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleTextChange}
            autoFocus
            placeholder="Search..."
          />
          <button>Submit</button>
        </form>
      </section>
      {findPerson && !error ? (
        <aside>
          <div>
            <h3>
              <span>Name:</span> {findPerson.name}
            </h3>
            <p>
              <span>Age:</span> {findPerson.age}
            </p>
            <p>
              <span>Eye Color:</span> {findPerson.eye_color}
            </p>
            <p>
              <span>Hair Color:</span> {findPerson.hair_color}
            </p>
          </div>
        </aside>
      ) : (
        <section>
          <p> {error}</p>
        </section>
      )}
    </main>
  );
}

export default People;
