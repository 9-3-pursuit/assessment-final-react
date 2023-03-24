
export default function MovieInfo({selectedMovie}) {
    
    return (
        <aside>
            <h2><span>Title:</span> {selectedMovie.title}</h2>
            <p><span>Released Date:</span> {selectedMovie.release_date}</p>
            <p><span>Description: </span>{selectedMovie.description}</p>
          
        </aside>
    )
}