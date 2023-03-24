export default function Person( { person }) {
    return (
        <aside className='personCard'>
          <h3>Name: {person.name}</h3>
          <p><span>Age:</span> {person.age}</p>
          <p><span>Eye color:</span> {person["eye_color"]}</p>
          <p><span>Hair color:</span> {person["hair_color"]}</p>
        </aside>
      )
  }