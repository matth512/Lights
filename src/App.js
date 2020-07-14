import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigEditor } from "./ConfigEditor";

const loginUrl =
  "https://helgren.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id= 38aqmkuo5qpqod397p6nmdij2q&redirect_uri=https%3A%2F%2Fhelgren-lights.s3.us-east-2.amazonaws.com%2Findex.html";

class App extends React.Component {
  constructor() {
    super();
    console.log(window.location.hash.substring(1));
    const search = new URLSearchParams(window.location.hash.substring(1));
    window.accessToken = search.get("access_token");
    window.idToken = search.get("id_token");
    console.log("idtoken: " + window.idToken);
  }

  render() {
    let editor;
    if (window.idToken !== undefined) {
      editor = <ConfigEditor />;
    } else {
      editor = (
        <button onClick={event => (window.location.href = loginUrl)}>
          Login with Google
        </button>
      );
    }

    return (
      <div className="App">
        <h3>Welcome7</h3>
        {editor}
      </div>
    );
  }
}

export default App;
