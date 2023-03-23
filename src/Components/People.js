 import { useState } from "react";
 export default function People () {
    console.log("test")
   
// const URL = "https://rickandmortyapi.com/api/character/?name=";
const [userSearch, setUserSearch] = useState("");
  const [character, setCharacter] = useState({}); // would keep track of the displayed character
  const [error, setError] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://rickandmortyapi.com/api/character/?name=${userSearch}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)
        setError(false) // if error isn't there
        setCharacter(response.results[0]);
        setUserSearch(""); //resets search input back blank when searcgh is submitted
      })
      .catch((error) => {
        // console.log("");
        setError(true) // if error is there via api call
      });
  }
  return (
    <div className="search-engine">
      <h2> Search for Character Name: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          value={userSearch}
          onChange={(event) => setUserSearch(event.target.value)}
      
        />
        <button type="submit">Search</button>
      </form>
      {/* adding the double ! makes it a boolean equaling zero, 
      if it has a length then it will return the info 
      BUT if there is no length then it returns false;
      if no error it will return the the character picked --v */}
      {(!!Object.keys(character).length && !error) && (
        <section>
          <h3>Name: {character.name}</h3>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>
          <img src={character.image} alt="character-img"></img>
        </section>
      )}
      {/* if error is found --v */}
      {error && <h2>Not Found!</h2>}
    </div>
  );
}


 
