import { useState,useEffect } from "react"
import "./People.css"


export default function People() {

  const [person, setPerson] = useState([])
  const [selectedPerson, setSelectedPerson] = useState("");
  const [people,setPeople] = useState([]);
 
 const [toggle,setToggle] = useState(false)


 //only for testing
 useEffect(() => {
  fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
    .then((res) => res.json())
    .then((response) => setPeople(response));
}, []);
//testing
    
  function handleTextChange(event) {
    setSelectedPerson(event.target.value.slice(0,1).toUpperCase() + event.target.value.slice(1).toLowerCase());
  
  }

  function handleSubmit(e) {
    e.preventDefault();
 
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/people/?name=${selectedPerson}`)
      .then((res) => res.json())
      .then((response) => setPerson(response));

    setSelectedPerson('')
     setToggle(true) 
  }
    
  return (
    <div className="people">
      <h1>Search for a Person</h1> 
      <form onSubmit={handleSubmit}>
        
          <input
          type="text"
          value={selectedPerson}
          placeholder="Search for a person"
          onChange={handleTextChange}
          id="name"
          className="inputPeople"
        /> 
        <button type='submit' className="buttonPeople">Submit</button>
       </form>

        <article className="handletoggle">
        {
            
            !toggle ? (null) : ( 
          
          (person.length !==0) ? ( <>
          <h3><span>Name:</span> {person[0].name}</h3>
          <h4><span>Age:</span> {person[0].age}</h4> 
          <h4><span>Gender:</span> {person[0].gender}</h4>
          <h4><span>Eye Color:</span> {person[0].eye_color}</h4>
          <h4><span>Hair Color:</span> {person[0].hair_color}</h4>
          </>) : (<h4>Not found</h4>)
          )}
        </article>
       
    </div>
  )
}