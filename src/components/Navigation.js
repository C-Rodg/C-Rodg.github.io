import React from "react";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="logo">
				<img src={require("../assets/logo.png")} alt="Curtis Rodgers" />
			</div>
			<div className="name">
				<a href="index.html">
					<span className="light">Curtis. </span>Rodgers
				</a>
			</div>
			<div className="links">
				<a href="about.html">About</a>
				<a href="work.html">Work</a>
				<a href="contact.html">Contact</a>
			</div>
		</div>
	);
};

export default Navigation;
