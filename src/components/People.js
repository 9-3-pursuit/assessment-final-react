const People = ({ person, searchInput, onSearch, handleSubmit }) => {

    

    return (
        <div className="people">
             <h1>Search for a Person</h1>
             <form onSubmit={handleSubmit}>
                <input type="text" value={searchInput} onChange={onSearch} />
                <button type="submit">Submit</button>
             </form>

        </div>
    )
}

export default People

//value={searchInput}

