export default function ShowMovie({selectedMovie}) {
    return (
        <>
           <h1>Title: {selectedMovie.title} </h1>
           <h3>Release Date: {selectedMovie.release_date} </h3>
            <p className="description"><span>Description:</span> {selectedMovie.description}</p>
        </>)
  }