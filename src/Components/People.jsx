import { useState,useEffect } from "react"

export default function People() {

  const [person, setPerson] = useState([])
  const [selectedPerson, setSelectedPerson] = useState("");
  const [cyp, setCyp] = useState([]);

  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/films")
      .then((res) => res.json())
      .then((response) => setCyp(response));
  }, []);

    
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
        /> 
        <button>Submit</button>
        </form>

        <article className="handletoggle">
        {
            
            !toggle ? (null) : ( 
          
          (person.length !==0) ? ( <>
          <p><span>Name:</span> {person[0].name}</p>
          <p><span>Age:</span> {person[0].age}</p> 
          <p><span>Gender:</span> {person[0].gender}</p>
          <p><span>Eye Color:</span> {person[0].eye_color}</p>
          <p><span>Hair Color:</span> {person[0].hair_color}</p>
          </>) : ("Not Found")
          )}
        </article>
       
    </div>
  )
}