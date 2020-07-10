import React from "react";

const api =
  "https://3iwf3m0rwk.execute-api.us-east-2.amazonaws.com/Dev/config/";

export class ConfigEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.reloadData();
  }

  reloadData() {
    console.log("here");
    fetch(api + this.state.value, {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      //   .then(data => console.log(data));
      .then(data => this.setState(data));
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ConfigId:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Load" />
        </form>
        <h2>{JSON.stringify(this.state, null, 2)}</h2>
      </div>
    );
  }
}
