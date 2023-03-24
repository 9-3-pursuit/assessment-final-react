import React, { useState } from 'react';

const PeoplePage = () => {
  const [search, setSearch] = useState('');
  const [person, setPerson] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://ghibliapi.herokuapp.com/people?name=${search}`);
    const data = await response.json();

    if (data.length > 0) {
      setPerson(data[0]);
      setNotFound(false);
    } else {
      setPerson(null);
      setNotFound(true);
    }

    setSearch('');
  };

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter a name"
        />
        <button type="submit">Search</button>
      </form>
      {person && (
        <div className="person-details">
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Eye Color: {person.eye_color}</p>
        </div>
      )}
      {notFound && <p>Not Found</p>}
    </div>
  );
};

export default PeoplePage;
