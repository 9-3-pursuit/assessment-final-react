import React from "react";

export default function Film({film}) {
    return (
        <div className="container-md">
            <article>
                <h1>{film.title}</h1>
                <p>Release Date: {film.release_date}</p>
                <p>{film.description}</p>
            </article>
        </div>
    );
}