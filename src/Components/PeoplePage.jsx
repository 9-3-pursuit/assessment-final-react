import { useState, useEffect } from 'react'
import {getPeople} from '../API/Fetch'

const PeoplePage = () => {

    const [people, setPeople] = useState('');
    const [searchPeople, setSearchPeople] = useState('');
    const [searchedName, setSearchedName] = useState('');

    useEffect(() => {
        getPeople()
            .then((data) => {
                setPeople(data)
                console.log('people',data)
        })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getPeople(searchPeople)
            .then((data) => {
                setPeople(data)
                setSearchedName(searchPeople)
        })

    }

    const handleInputChange = (e) => {
        setSearchPeople(e.target.value);
        setSearchedName('');
    }

    const displayData = () => {
        if (searchedName) {
            const foundPerson = people.find(person => person.name.toLowerCase()
                === searchedName.toLowerCase())
            if (foundPerson) {
                return (
                    <div>
                        <h3> <strong>Name: </strong> {foundPerson.name}</h3>
                        <p>  <strong>Age: </strong> {foundPerson.age}</p>
                        <p>  <strong>Eye Color: </strong> {foundPerson.eye_color}</p>
                        <p>  <strong>Hair Color: </strong> {foundPerson.hair_color}</p>
                        
                    </div>
                )
            } else {
                return <p>Not Found</p>
            }
        }

    }

    

    return (
        <form onSubmit={handleSubmit}>
            <div className='people'>
                <h1>Search for a Person</h1>
                <input type='text' value={searchPeople}
                    onChange={handleInputChange} />
                <button>Submit</button>
                {displayData()}
                



            </div>

        </form>
    )
}

export default PeoplePage