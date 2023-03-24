// form for the person id returned when solo person is searched
export default function Person({ soloPersonArr }) {
  return (
    <div className="person">
      <h1>Name: {soloPersonArr["name"]}</h1>
      <p>
        <strong>Age: </strong>
        {soloPersonArr["age"]}
      </p>
      <p>
        <strong>Eye Color: </strong>
        {soloPersonArr["eye_color"]}
      </p>
    </div>
  );
}
