import React from 'react'

export default function PersonCard({ person }) {
  return (
    <div className='personCard'>
      <h2>Name: {person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Eye color: {person["eye_color"]}</p>
      <p>Hair color: {person["hair_color"]}</p>
    </div>
  )
}