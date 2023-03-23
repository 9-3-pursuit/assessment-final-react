export default function ShowSelectedMovie({selectedMovie}) {
    return (
        <div>
            <h1>Title: {selectedMovie.title} </h1>
            <h3>Release Date: {selectedMovie.release_date} </h3>
            <p className="description"><span>Description:</span>{selectedMovie.description}</p>
        </div>
    )
}