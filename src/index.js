import React from "react";
import ReactDOM from "react-dom";
import foo from "./index.css";
import App from "./App";

console.log(foo);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
