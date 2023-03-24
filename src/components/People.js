import { useEffect, useState } from "react";

const Person = () => {
    const [people, setPeople] = useState([]);
    const [personInput, setPersonInput] = useState("");
    const [result,  setResult] = useState(null);

      useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res=>res.json())
            .then(data=>{
             setPeople(data);
            })
        }, []);

 const handlePersonInput=(e)=> {
    setPersonInput(e.target.value);
 }

 const handleSubmit=() => {
    let findperson = people.find((person)=>{
        return person.name === personInput;
    })
    setResult(findperson);

 }
    
    return(
       <div>
            <h1> Search for a Person </h1>
             <input
            placeholder=""
            type="text"
            value={ personInput}
            onChange={ handlePersonInput}
            />
            <button onClick={handleSubmit}>Submit</button>
        
                <div>
                    <ul>
                        <il>Name: {result.name}</il>
                        <il>Age: {result.age}</il>
                        <il>Eye Color: {result.eye_color}</il>
                    </ul>
                </div>
        
            { result  === undefined &&
                <h3> Not Found</h3>
            } 
        </div> 

     
    )

}

export default People;