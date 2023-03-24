import { useState } from "react";
import { getOnePerson } from "../API/Fetch";
import PeopleInfo from "./PeopleInfo"


export default function People() {
    const [searchName , setSearchName] = useState("");
    const [searchPerson, setSearchPerson] = useState([]);
    
    function handleTextChange(event) {
        setSearchName(event.target.value)
        
    }
 
    function handleSubmit(event){
        event.preventDefault();
        getOnePerson(searchName).then(response => {
          setSearchPerson(response)
        })
           
    }

    console.log(searchPerson)
    
    return (
        <div className="people">
          <h1>Search for a Person</h1>
          <form>
            <input 
                type="text"
                value={searchName}
                id=""
                onChange={handleTextChange}
            />
            <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
          </form>
          <div>
            
              {!searchPerson ? <p>"Not Found"</p> :
                <aside><PeopleInfo searchPerson={searchPerson} />
            </aside> }
          </div>
        </div>
      );
  }