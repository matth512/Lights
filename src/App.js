import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigEditor } from "./ConfigEditor";

const loginUrl =
  "https://helgren.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id= 38aqmkuo5qpqod397p6nmdij2q&redirect_uri=https%3A%2F%2Fhelgren-lights.s3.us-east-2.amazonaws.com%2Findex.html";

class App extends React.Component {
  componentDidMount() {
    window.accessToken = new URLSearchParams(window.location.search).get(
      "access_token"
    );
    console.log(window.accessToken);
    window.idToken = new URLSearchParams(window.location.search).get(
      "id_token"
    );
    console.log(window.idToken);
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome7</h3>
        <button onClick={event => (window.location.href = loginUrl)}>
          Login with Google
        </button>
        <ConfigEditor />
      </div>
    );
  }
}

export default App;
