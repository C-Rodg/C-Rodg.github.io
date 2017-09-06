import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";
import "./styles/default.scss";

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById("container")
);
