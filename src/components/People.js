function People() {
  fetchData = async () => {
    let res = await fetch("https://resource-ghibli-api-pursuit.onrender.com/people");
    let data = await res.json();
    this.setState({
      apiData: data,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let details = this.state.apiData.find((item) => {
      return item.name.toLowerCase() === this.state.displayValue;
    });
    this.setState({
      answer: details ? this.renderTitle(details) : "Not Found",
    });
  };
  handleChange = (event) => {
    this.setState({ displayValue: event.target.value.toLowerCase().trim() });
  };
  renderTitle = (details) => {
    return (
      <div className="person-container">
        <h3 className="person-name">Name: {details.name}</h3>
        <h3 className="person-age">Age: {details.age}</h3>
        <h3 className="person-gender">Gender: {details.gender}</h3>
      </div>
    );
  };
}

export default People;
