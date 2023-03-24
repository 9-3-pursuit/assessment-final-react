export default function Film ({movies, selectedMovie}) {
    console.log(movies)
    console.log(selectedMovie)

   const filteredArray = movies.filter(movie => movie.title === selectedMovie)
    console.log(movies)
    return(<>
        <aside className="movies">
        <h2><span>Title:</span> {filteredArray[0].title}</h2>
        <p><span>Release Date:</span> {filteredArray[0].release_date}</p>
        <p><span>Description:</span> {filteredArray[0].description}</p>
        </aside>
        </>)
}