import React from 'react';

export default function PersonCard({ person }) {
  return (
    <aside className='personCard'>
      <h3>Name: {person.name}</h3>
      <p><span>Age:</span> <span>{person.age}</span></p>
      <p><span>Eye color:</span><span>{person["eye_color"]}</span></p>
      <p><span>Hair color:</span> <span>{person["hair_color"]}</span></p>
    </aside>
  )
}