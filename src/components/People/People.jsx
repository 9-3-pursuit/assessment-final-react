import { useState } from "react";
import useGhibliData from "../../hooks/useGhibliData";

const Person = ({ person }) => {
  return (
    <aside className="person">
      <h3>Name: {person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Hair Color: {person.hair_color}</p>
    </aside>
  );
};

const People = () => {
  const people = useGhibliData("people");
  const [searchInput, setSearchInput] = useState("");
  const [person, setPerson] = useState("");

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const personFound = people.find((person) => person.name === searchInput);

    setPerson(personFound || "Not Found");
    setSearchInput("");
  };

  const renderPerson = () => {
    if (!person) {
      return null;
    }

    if (typeof person === "string") {
      return <p>Not Found</p>;
    }

    return <Person person={person} />;

    // original ternary logic
    // return person
    // / ? typeof person === "string"
    // /   ? <p>Not Found</p>
    //       : <Person person={person} />
    //          : null;
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="search" value={searchInput} onChange={handleInput} placeholder="Search..." />
        <button>Search</button>
      </form>
      {renderPerson()}
    </div>
  );
};

export default People;
