// ! URL -> http://localhost:3000/people

import { useEffect, useState } from "react";
 import Person from "../Components/Person"; // ? import of person selected form

export default function People() {
  //   console.log("test");

  const [search, setSearch] = useState(""); // search for person
  const [person, setPerson] = useState(""); // ? selected person via user
  const [people, setPpl] = useState([]); // ? state all ppl

  //  fetches all people
  useEffect(() => {
    fetch(` https://resource-ghibli-api-pursuit.onrender.com/people`)
      .then((response) => response.json())
      .then((people) => {
        // console.log(people);
        setPpl([...people]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  ? attempt to fetch selected person
    function onePerson() {
      let soloPersonArr = people.filter((person) => {
        console.log(soloPersonArr)
          return person.name.toLowerCase() === search.toLowerCase();

      });
    }

 
  // handles the change of person via search
  function handlePersonChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }
  
  // handles submit button for person searched
  function handlePersonSubmit(event) {
    event.preventDefault();
    setPerson("");
  }

  return (
    <div className="people">
      <h2> Search for a Person🤔 </h2>
      <form>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handlePersonChange}
          placeholder="Search...🎥"
        />
        <button onClick={(event) => handlePersonSubmit(event)}>Submit</button>
      </form>
      {person ? <Person soloPersonArr={soloPersonArr}/> : null}
    </div>
  );
}
