export default function MovieCard({ movieId, movies }) {

    const movie = movies.filter(movie => movie.id === movieId)[0]

  return (
    <aside className="movieCard">
      <h2>Title: {movie.title}</h2>
      <p>Release date: {movie.release_date}</p>
      <p>Description: {movie.description}</p>
    </aside>
  )
}