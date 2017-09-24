import React from "react";

import Images from "./Images";
import "../styles/work.scss";
import ImageTile from "./ImageTile";

const WorkPage = () => {
	return (
		<div className="work-page">
			<div className="container">
				{Images.map((imgObj, i) => {
					return <ImageTile img={imgObj} key={i} />;
				})}
			</div>
		</div>
	);
};

export default WorkPage;
