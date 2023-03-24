import React, { useState, useEffect } from "react";
export default function People() {
  const [people, setPeople] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  const [selectPeople, setSelectPeople] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
      .then((res) => res.json())
      .then((response) => {
        setPeopleList(response)
      });
        // }).catch((error) => {
        //   console.log(error)
        //   setError(error);
  }, []);
  

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
       setPeople([])
      
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
          {peopleList.length === 0  ? "Not Found" :
            <div key={peopleList[0].id}>
              <h1>{peopleList[0].name}</h1>
              <p><span className="age">Age:</span>{peopleList[0].age}</p>
              <p><span className="gender">Gender:</span>{peopleList[0].gender}</p>
              <p><span className="eye-color">Eye Color:</span>{peopleList[0].eye_color}</p>
              <p><span className="hair-color">Hair Color:</span>{peopleList[0].hair_color}</p>
            </div>
          }
        </div>
    </div>
  );
};

