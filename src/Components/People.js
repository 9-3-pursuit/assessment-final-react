import React, { useState } from "react";

const API_URL = "https://resource-ghibli-api-pursuit.onrender.com";

export default function People() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  
  console.log(`${API_URL}/people`);

  let searchedName = people && people.find((person) => {
    console.log(person)
    return people.name === person.name
  });
  // const [searchedName, setSearchedName] = useState([]);

  // useEffect(() => {
  //     fetch(`${API_URL}/people`)
  //       // console.log(`${API_URL}/character`)
  //       .then((res) => res.json())
  //       .then((res) => setPeople(res));
  //   }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${API_URL}/people`)
      .then((res) => res.json())
      .then((res) => {
        setPeople(res);
        setSearch("");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleTextChange(e) {
    setSearch(e.target.value);
    if(searchedName) {
      setPeople(searchedName);
    // }else if(searchedName === undefined) {
    //   console.log("No results found")
      
    }
  }

  // function handleError(people) {
  //   if (people ) {
  //     return <h1>No results found</h1>;
  //   }
  // }
  return (
    <div className="people">
      <h2>Search for a person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {people.length > 0 && (
        <section>
          <h1>Name is:{people.name}</h1>
          <p>Age:{people.age}</p>
          <p>EyeColor: {people.eye_color}</p>
        </section>
      )}
    </div>
  );
}
