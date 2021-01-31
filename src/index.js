import React from "react";
import ReactDOM from "react-dom";
import AdminApp from "./AdminApp";
import App from "./App";

const mount = document.getElementById("root");
console.log(`REACT_APP_BUILD_TARGET = ${process.env.REACT_APP_BUILD_TARGET}`);
switch (process.env.REACT_APP_BUILD_TARGET) {
  case "public":
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      mount
    );
    break;
  case "admin":
    ReactDOM.render(
      <React.StrictMode>
        <AdminApp />
      </React.StrictMode>,
      mount
    );
    break;
  default:
    ReactDOM.render(
      <React.StrictMode>
        <p>
          Unknown REACT_APP_BUILD_TARGET: {process.env.REACT_APP_BUILD_TARGET}
        </p>
      </React.StrictMode>,
      mount
    );
    break;
}
