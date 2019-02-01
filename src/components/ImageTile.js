import React from 'react';

import '../styles/imageTile.scss';
const Plus = require('react-feather/dist/icons/plus-square').default;

const ImageTile = ({ img, idx, onOpenImage, row, col }) => {
	const diagonalOffset = row + col;
	return (
		<figure className="image-tile" onClick={() => onOpenImage(idx)}>
			<figcaption>
				<h3>{img.category}</h3>
				<span>{img.company}</span>
				<Plus />
			</figcaption>
			<img
				src={img.thumb}
				alt={[img.company, img.category].join(' - ')}
				style={{ animationDelay: diagonalOffset * 0.12 + 's' }}
			/>
		</figure>
	);
};

export default ImageTile;
