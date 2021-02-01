import React from "react";

const api =
  "https://3iwf3m0rwk.execute-api.us-east-2.amazonaws.com/Dev/config/";

export class ConfigEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: 0.0, long: 0.0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    this.reloadData();
    event.preventDefault();
  }

  handleSubmitSave(event) {
    // alert("A name was submitted: " + this.state.value);
    const myObj = { guid: this.state.value, c: {} };
    myObj.c.lat = this.state.lat;
    myObj.c.long = this.state.long;

    const output = JSON.stringify(myObj);
    console.log(output);
    fetch(api + this.state.value, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.idToken
      },
      mode: "cors",
      body: output
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  reloadData() {
    console.log("here6");
    fetch(api + this.state.value, {
      method: "GET",
      headers: new Headers({
        Authorization: window.idToken
      }),
      mode: "cors"
    })
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => this.setState(data.c));
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
          <label>
            Lat:
            <input
              type="text"
              name="name"
              value={this.state.lat}
              onChange={(event) => this.setState({ lat: event.target.value })}
            />
          </label>
          <label>
            Long:
            <input
              type="text"
              name="name"
              value={this.state.long}
              onChange={(event) => this.setState({ long: event.target.value })}
            />
          </label>
          <input type="submit" value="Load" />
          <button onClick={this.handleSubmitSave.bind(this)}>Save</button>
        </form>
        <h2>{JSON.stringify(this.state, null, 2)}</h2>
      </div>
    );
  }
}
