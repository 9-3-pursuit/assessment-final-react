export default function Movies ({movies, selected, handleSelectChange}) {

    return (
        <main className="movies">
            <h2>Select a Movies</h2>
            <section>
                <select onChange={handleSelectChange}>
                    <option value="">Please select an option</option>
                    {movies ? movies.map((movie, index) => {
                        return(
                            <option key={index} value={movie.id}>{movie.title}</option>
                        )
                    }) : null}
                </select>
            </section>
            {selected ?
            <aside>
                <h2><strong>Title: </strong>{selected.title}</h2>
                <p><strong>Release Date: </strong>{selected.release_date}</p>
                <p><strong>Description: </strong>{selected.description}</p>
            </aside>
            : null}
        </main>
    )
}