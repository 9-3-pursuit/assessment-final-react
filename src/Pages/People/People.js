import { useState } from "react";
import useStudioGhibliAPI from "../../Hooks/useStudioGhibliAPI";

export default function People() {
  const allPeople = useStudioGhibliAPI("people");
  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePersonSearch = (e) => {
    const personDetails = allPeople.find(({ name }) => {
      return name.toLowerCase() === userInput.toLowerCase();
    });

    setSelectedOption(personDetails || "Not Found");
  };

  const handleInputChange = (e) => setUserInput(e.target.value);
  return (
    <main>
      <section className="people">
        <h2>Search for a Person</h2>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button onClick={handlePersonSearch}>Submit</button>
        {selectedOption && <ResultsSection selectedOption={selectedOption} />}
      </section>
    </main>
  );
}

const ResultsSection = ({ selectedOption }) => {
  return selectedOption === "Not Found" ? (
    <p>Not Found</p>
  ) : (
    <aside>
      <h2>Name: {selectedOption.name}</h2>
      <h6>Age: {selectedOption.age}</h6>
      <h6>Gender: {selectedOption.gender}</h6>
      <h6>Eye Color: {selectedOption.eye_color}</h6>
    </aside>
  );
};
