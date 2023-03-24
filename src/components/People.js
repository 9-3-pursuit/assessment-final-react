const People = ({ person, searchInput, onSearch, handleSubmit, error }) => {

    return (
        <main className="people">
             <h1>Search for a Person</h1>
             <form onSubmit={handleSubmit}>
                <input type="text" value={searchInput} onChange={onSearch} />
                <button type="submit">Submit</button>
             </form>
             { person.name ? (
                <aside>
                <section>
                <h3>Name: {person.name}</h3>
                <p>Age: {person.age}</p>
                <p>Hair Color: {person.hair_color}</p>
                </section>    
                </aside>
             ): error }
        </main>
    )
}

export default People

//value={searchInput}

