import React, { Component } from 'react';

import Images from './Images';
import '../styles/work.scss';
import ImageTile from './ImageTile';
import Lightbox from 'react-image-lightbox';
import Footer from './Footer';

class WorkPage extends Component {
	constructor() {
		super();
		this.state = { openImage: null, imageList: [] };
		this.containerWidth = 300;
	}

	componentDidMount() {
		const wrapper = document.getElementById('image-wrapper');
		if (wrapper) {
			this.containerWidth = wrapper.offsetWidth;
		}

		this.setState({ imageList: Images });
	}

	// Open image lightbox
	handleOpenImage = idx => {
		this.setState({
			openImage: idx
		});
	};

	// Clear out open images
	handleCloseImage = () => {
		this.setState({ openImage: null });
	};

	// Generate image map
	generateTileImages = () => {
		const { imageList } = this.state;
		const numberOfColumns = Math.floor(this.containerWidth / 300);
		let row = 0;
		let col = 0;
		const imageTiles = [];
		for (let i = 0; i < imageList.length; i++) {
			const imgObj = imageList[i];
			imageTiles.push(
				<ImageTile
					img={imgObj}
					key={imgObj.key}
					idx={i}
					row={row}
					col={col}
					onOpenImage={this.handleOpenImage}
				/>
			);
			col++;
			if (col >= numberOfColumns) {
				col = 0;
				row++;
			}
		}

		return imageTiles;
	};

	render() {
		return (
			<div className="work-page">
				<div className="container" id="image-wrapper">
					{this.generateTileImages()}
				</div>
				{this.state.openImage !== null ? (
					<Lightbox
						mainSrc={Images[this.state.openImage].full}
						nextSrc={Images[(this.state.openImage + 1) % Images.length].full}
						prevSrc={
							Images[(this.state.openImage + Images.length - 1) % Images.length]
								.full
						}
						onCloseRequest={() => this.setState({ openImage: null })}
						onMovePrevRequest={() =>
							this.setState({
								openImage:
									(this.state.openImage + Images.length - 1) % Images.length
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								openImage: (this.state.openImage + 1) % Images.length
							})
						}
						discourageDownloads={true}
						imageTitle={[
							Images[this.state.openImage].category,
							Images[this.state.openImage].company
						].join(' - ')}
						imageCaption={Images[this.state.openImage].desc}
					/>
				) : (
					''
				)}
				<Footer />
			</div>
		);
	}
}

export default WorkPage;
