import React from "react";
import { Switch, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import ContactPage from "./ContactPage";
import WorkPage from "./WorkPage";

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={WelcomePage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/work" component={WorkPage} />
			</Switch>
		</main>
	);
};

export default Main;
