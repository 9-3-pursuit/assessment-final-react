function Locations() {
  fetchData = async () => {
    let res = await fetch("https://resource-ghibli-api-pursuit.onrender.com/locations");
    let data = await res.json();
    this.setState({
      apiData: data,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submited: !this.state.submited,
    });
  };
  renderTitle = () => {
    if (this.state.submited) {
      let dataComp = this.state.apiData.map((item) => {
        return (
          <li className="location-container" key={item.id}>
            <h3 className="location-name">Name: {item.name}</h3>
            <h3 className="location-climate">Climate: {item.climate}</h3>
            <h3 className="location-terrain">Terrain: {item.terrain}</h3>
          </li>
        );
      });
      return dataComp;
    } else {
      return null;
    }
  };
}

export default Locations;
