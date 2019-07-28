import React from 'react';
import '../styles/welcome.scss';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
	return (
		<div className="welcome-page">
			<div className="col col-picture">
				<img
					src={require('../assets/me.jpg')}
					alt="Curtis Rodgers - Developer"
				/>
			</div>
			<div className="col col-content">
				<div className="text-wrapper from-right">
					<h1>Curtis Rodgers</h1>
					<h2>Software Engineer</h2>
					<Link className="ghost-button white-ghost" to="/work">
						My Work
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
