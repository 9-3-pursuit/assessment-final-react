import { useEffect } from 'react';
import { useState } from 'react'
import PersonCard from '../components/PersonCard';

const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"

export default function PeoplePage() {

    const [search, setSearch] = useState("");
    const [people, setPeople] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState("");
    const [notFound, setNotFound] = useState(false);

    function getPeople() {
       return fetch(`${baseURL}/people`).then(response => response.json())
    }

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function getSelectedPerson() {
       const personArr = people.filter(p => {
            return p.name.toLowerCase() === search.toLowerCase()
        });
        if (personArr.length > 0) {
            setNotFound(false);
            return personArr[0];
        } else {
            setNotFound(true);
        }
    }

    function handleSubmit(e) {
        
        e.preventDefault();
        setSelectedPerson(getSelectedPerson())
        setSearch("");
    }

    useEffect(() => {
        getPeople().then(persons => {
            setPeople([...persons])
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <section className='people'>
        <h2>Search for a Person</h2>
      <form>
        <input type="text" value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {selectedPerson ? <PersonCard person={selectedPerson} /> : null}
      {notFound ? <p>Not Found.</p> : null}
      
    </section>
  )
}