function Movies() {
  fetchData = async () => {
    let res = await fetch("https://resource-ghibli-api-pursuit.onrender.com/films");
    let data = await res.json();
    this.setState({
      apiData: data,
    });
  };
  handleChange = (event) => {
    this.setState({ displayValue: event.target.value });
  };
  renderTitle = () => {
    if (this.state.displayValue) {
      let details = this.state.apiData.find((item) => {
        return item.title === this.state.displayValue;
      });
      return (
        <div className="movie-container">
          <h3 className="movie-title">Title: {details.title}</h3>
          <h3 className="movie-release">
            Release Date: {details.release_date}
          </h3>
          <h3 className="movie-desc">Description: {details.description}</h3>
        </div>
      );
    } else {
      return null;
    }
  };
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select value={this.state.displayValue} onChange={this.handleChange}>
          <option value={""}>{""}</option>
          {movies}
        </select>
        {this.renderTitle()}
      </div>
  );
}

export default Movies;
