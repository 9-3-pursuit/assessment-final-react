export default function PeopleInfo( {searchPerson} ) {
  
    return (
        <>
            <h3>Name: {searchPerson.name}</h3>
            <p><span>Age:</span> {searchPerson.age}</p>
            <p><span>Eye Color:</span> {searchPerson.eye_color}</p>
            <p><span>Hair Color:</span> {searchPerson.hair_color}</p>
        </>
    )
}