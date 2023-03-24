import React, { useState, useEffect } from "react";
export default function People() {
  const [people, setPeople] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  
  function handleTextChange(e) {
    setPeople(e.target.value.slice(0,1).toUpperCase() + e.target.value.slice(1).toLowerCase());
   ;
  }
  
  function handleSubmit(e) {
    const baseURL = "https://resource-ghibli-api-pursuit.onrender.com"
     e.preventDefault();
    fetch(`${baseURL}/people/?name=${people}`)
      .then((res) => res.json())
      .then((response) => {
      setPeopleList(response)
      setPeople("")
      
  })
      
  }
  
  return (
    
    <div className="people">
       <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Search for a person"
          onChange={handleTextChange}
          value={people}
          />
          <button type="submit">Submit</button>
      </form>
      
       <div className="people">
          {peopleList.length === 0 || !peopleList ? "Not Found" : peopleList.map((person) => (
            <div key={person.id}>
              <h1>{person.name}</h1>
              <p><span className="age">Age:</span>{person.age}</p>
              <p><span className="gender">Gender:</span>{person.gender}</p>
              <p><span className="eye-color">Eye Color:</span>{person.eye_color}</p>
              <p><span className="hair-color">Hair Color:</span>{person.hair_color}</p>
            </div> 
          ))}
            
       </div>
    </div>
  );
}