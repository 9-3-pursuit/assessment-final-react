import React from "react"
export default function Person({ person }) {
    return (
        <div className="container-md">
            <article>
                <h1>Name: {person.name}</h1>
                <p>Age: {person.age}</p>
                <p>EyeColor: {person.eye_color}</p>
                <p>Gender: {person.gender}</p>

            </article>
        </div>
    )
}