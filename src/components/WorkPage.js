import React, { Component } from "react";

import Images from "./Images";
import "../styles/work.scss";
import ImageTile from "./ImageTile";
import Lightbox from "react-image-lightbox";
import Footer from "./Footer";

class WorkPage extends Component {
	constructor() {
		super();
		this.state = { openImage: null };
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

	render() {
		return (
			<div className="work-page">
				<div className="container">
					{Images.map((imgObj, i) => {
						return (
							<ImageTile
								img={imgObj}
								key={i}
								idx={i}
								onOpenImage={this.handleOpenImage}
							/>
						);
					})}
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
							})}
						onMoveNextRequest={() =>
							this.setState({
								openImage: (this.state.openImage + 1) % Images.length
							})}
						discourageDownloads={true}
						imageTitle={[
							Images[this.state.openImage].category,
							Images[this.state.openImage].company
						].join(" - ")}
						imageCaption={Images[this.state.openImage].desc}
					/>
				) : (
					""
				)}
				<Footer />
			</div>
		);
	}
}

export default WorkPage;
