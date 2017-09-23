import React from "react";
import "../styles/footer.scss";

const Footer = () => {
	const date = new Date();
	return (
		<div className="row footer">Curtis Rodgers - {date.getUTCFullYear()}</div>
	);
};

export default Footer;
