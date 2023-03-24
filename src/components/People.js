import { useEffect, useState } from "react";
import { getAllPeople } from "./fetch";
import Person from "./Person";

export default function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [searchError, SetSearchError] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("");

  useEffect(() => {
    getAllPeople()
      .then((response) => {
        setPeople(response);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  function handleTextChange(event) {
    setSearch(event.target.value);
  }

 
  function getSelectedPerson() {
    const result = people.filter(person => {
         return person.name.toLowerCase() === search.toLowerCase()
     });
     if (result.length > 0) {
         SetSearchError(false);
         return result[0];
     } else {
         SetSearchError(true);
     }
 }

 function handleSubmit(event) {
    event.preventDefault();
    setSelectedPerson(getSelectedPerson());
    setSearch("");
 }


  return (
    <section className='people'>
        <h2>Search for a Person</h2>
      <form>
        <input type="text" value={search} onChange={(event) => handleTextChange(event)} />
        <button onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
      {selectedPerson ? <Person person={selectedPerson} /> : null}
      {searchError ? <p>Not Found</p> : null}
    </section>
  )
}