import { useState, useEffect } from "react";
import getInfo from "../api/fetch";

export default function People() {
    const [userSearch, setUserSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [people, setPeople] = useState(null);

    function handleInputChange(event) {

        setUserSearch(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const person = people.find(person => person.name.toLowerCase().includes(userSearch.toLowerCase()));
        if (person) {
            setSearchResult(person)
        } else {
            setSearchResult(null)
        }
        setUserSearch("")
    }
    
    useEffect(() => {
      getInfo("people")
        .then(response => {
          setPeople(response)
        }).catch(error => {
          console.log(error);
        })
    }, [])
    console.log(searchResult)

    return (
      <div className="people mx-20 flex flex-col items-center">
        <h1 className="text-[48px]">Search for a Person</h1>
        <form className="flex items-center h-6">
          <input
            onChange={handleInputChange}
            className="border border-solid border-slate-300 rounded-[4px] h-8 w-[300px] pl-4"
            type="text"
            value={userSearch}
            required
          />
          <button
            onClick={handleSubmit}
            className="border border-solid border-slate-500 rounded-[4px] text-[10px] h-8 w-16 text-center font-extrabold hover:outline outline-1 outline-[turquoise]"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        {searchResult && (
          <div className="bg-[ghostwhite] mt-4 py-8 flex flex-col items-center space-y-6 w-10/12">
            <span className="text-[24px] font-semibold">
              Name: {searchResult.name}
            </span>
            <span className="font-extrabold">
              Age: <span className="font-medium">{searchResult.age}</span>
            </span>
            <span className="font-extrabold">
              Eye Color:{" "}
              <span className="font-medium">{searchResult.eye_color}</span>
            </span>
            <span className="font-extrabold">
              Hair Color:{" "}
              <span className="font-medium">{searchResult.hair_color}</span>
            </span>
          </div>
        )}
        {searchResult === null ? (
          <span className="mt-8 font-bold">Not Found</span>
        ) : null}
      </div>
    );
}