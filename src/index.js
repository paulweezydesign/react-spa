import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import BasicExample from "./Router.js";

function App() {
  return (
    <div className="App">
      <h1>React Router SPA</h1>
      <div className="BasicRouterExample">
        <BasicExample />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
