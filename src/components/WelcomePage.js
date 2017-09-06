import React from "react";

const WelcomePage = () => {
	return (
		<div className="welcome-page">
			<div className="upBox slideUp" />
			<div className="spin">
				<div className="loadingBox grow" />
			</div>
			<div className="downBox slideDown" />
			<img src={require("../assets/profile.png")} alt="Curtis Rodgers" />
		</div>
	);
};

export default WelcomePage;
