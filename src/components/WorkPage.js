import React from "react";

const Plus = require("react-feather/dist/icons/plus-square").default;
import Images from "./Images";
import "../styles/work.scss";

const WorkPage = () => {
	return (
		<div className="work-page">
			<div className="container">
				{Images.map((imgObj, i) => {
					return (
						<figure className="image-tile" key={i}>
							<img
								src={imgObj.thumb}
								alt={[imgObj.company, imgObj.category].join(" - ")}
							/>
							<figcaption>
								<h3>{imgObj.category}</h3>
								<span>{imgObj.company}</span>
								<Plus />
							</figcaption>
						</figure>
					);
				})}
			</div>
		</div>
	);
};

export default WorkPage;
