import React from "react";
import "./styles.css";
import { Start } from "./Start";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigEditor } from "./ConfigEditor";

export default function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
      <ConfigEditor />
    </div>
  );
}
