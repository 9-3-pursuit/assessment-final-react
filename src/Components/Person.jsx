export default function Person ({person}) {
    console.log(person[0])
    return (<>
    <aside className="people">
        <h2>Name: {person[0].name}</h2>
        <p><span>Age:</span> {person[0].age}</p>
        <p><span>Eye Color:</span> {person[0].eye_color}</p>
        <p><span>Hair Color:</span> {person[0].hair_color}</p>
    </aside>
    </>)
}