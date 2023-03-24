// import { useState,useEffect } from "react"
// // import "./People.css"


// export default function People() {
// const [selectedPerson, setSelectedPerson] = useState("");
//   const [person, setPerson] = useState([]);
//   const [toggle, setToggle] = useState(false)
//   const [peopleList, setPeopleList] = useState([])
//   useEffect(() => {
//     fetch("https://resource-ghibli-api-pursuit.onrender.com/people")
//       .then((res) => res.json())
//       .then((response) => {
//         setPeopleList(response)
//       });
// //         // }).catch((error) => {
// //         //   console.log(error)
// //         //   setError(error);
//   }, []);
  
//   function handleTextChange(event) {
//     setSelectedPerson(event.target.value.slice(0,1).toUpperCase() + event.target.value.slice(1).toLowerCase());
//     console.log(selectedPerson)
//   }


//   function handleSubmit(e) {
//     e.preventDefault();
//     const baseURL = "https://resource-ghibli-api-pursuit.onrender.com";
    
//     fetch(`${baseURL}/people/?name=${selectedPerson}`)
//        .then((res) => res.json())
//        .then((response) => setPerson(response));
//       setSelectedPerson("");
//       setToggle(true)
//   }
    
//   return (
//     <div className="people">
//       <h1>Search for a Person</h1> 
//       <form onSubmit={handleSubmit}>
        
//           <input
//           type="text"
//           value={selectedPerson}
//           placeholder="Search for a person"
//           onChange={handleTextChange}
//           id="name"
//         /> 
//         <button>Submit</button>
//         </form>
//         <article>
//         {
//           !toggle ? (null) :(person.length === 0) ? (<p className="not-found">Not found</p>) :
//         (!person.length !== 0) ? (
//           <>
//         <p><span className="name">Name:</span> {person[0].name}</p>
//         <p><span className="age">Age:</span> {person[0].age}</p> 
//         <p><span className="gender">Gender:</span> {person[0].gender}</p>
       
//         <p><span className="eye-color">Eye Color:</span> {person[0].eye_color}</p>
//         <p><span className="hair-color">Hair Color:</span> {person[0].hair_color}</p>
//         </>) : (null)
        
//         }
//         </article> 
//     </div>
//   )
// }


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
