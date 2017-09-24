import React from "react";

import "../styles/imageTile.scss";
const Plus = require("react-feather/dist/icons/plus-square").default;

const ImageTile = ({ img, idx, onOpenImage }) => {
	return (
		<figure className="image-tile" onClick={() => onOpenImage(idx)}>
			<img src={img.thumb} alt={[img.company, img.category].join(" - ")} />
			<figcaption>
				<h3>{img.category}</h3>
				<span>{img.company}</span>
				<Plus />
			</figcaption>
		</figure>
	);
};

export default ImageTile;
