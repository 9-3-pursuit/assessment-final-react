import { useState, useEffect } from "react";

function People() {
  const [name, setName] = useState("");
  const [person, setPerson] = useState(null);
  const [allPeople, setAllPeople] = useState([]);

  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
      .then((response) => response.json())
      .then((data) => setAllPeople(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundPerson = allPeople.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    setPerson(foundPerson || "not found");
    setName("");
  };

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {person && person !== "not found" ? (
        <div>
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>Eye color: {person.eye_color}</p>
        </div>
      ) : (
        <p>{person === "not found" && "Not Found"}</p>
      )}
    </div>
  );
}

export default People;
