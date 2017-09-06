import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/default.scss";

ReactDOM.render(<App />, document.getElementById("container"));
