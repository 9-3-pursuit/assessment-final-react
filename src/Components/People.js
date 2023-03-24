// allow users to search via text form & fetch required data from api (assessmentn prep / forms lab for ref)
// once searched, should return name, age & eye color
//figure out how to clear text field upon input
//figure out how cypress wants api call

import { useState } from "react";

export default function People() {
  const [character, setCharacter] = useState([]);
  const [input, setInput] = useState("");
  const URL2 = `https://resource-ghibli-api-pursuit.onrender.com/people/?name=${input}`;

  function handleSubmit(event) {
    event.preventDefault();

    fetch(URL2)
      .then((response) => response.json())
      .then((response) => setCharacter(response));
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          value={input}
          placeholder="Search for a person"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      <div>
        {character.length !== 0 ? (
          <div>
            <p>
              <div>Name:</div> {character[0].name}
            </p>
            <p>
              <div>Age:</div> {character[0].age}
            </p>
            <p>
              <div>Eye Color:</div> {character[0].eye_color}
            </p>
          </div>
        ) : (
          "Not Found"
        )}
      </div>
    </div>
  );
}
