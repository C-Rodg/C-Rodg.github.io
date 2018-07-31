import React from 'react';

const GitHub = require('react-feather/dist/icons/github').default;
const Mail = require('react-feather/dist/icons/mail').default;
const CodePen = require('react-feather/dist/icons/codepen').default;
const Instagram = require('react-feather/dist/icons/instagram').default;
import LinkedIn from '../extras/linkedIn';
import Footer from './Footer';

import '../styles/about.scss';

const AboutPage = () => {
	return (
		<div className="about-page">
			<div className="container">
				<div className="about-image">
					<img
						src={require('../assets/about.png')}
						alt="Curtis Rodgers - web developer"
					/>
				</div>
				<div className="about-row row-intro">
					<div className="col-title">Me.</div>
					<div className="col-body">
						Curtis Rodgers. Visual problem solver. Currently based out of
						Seattle.
					</div>
				</div>
				<div className="about-row row-do">
					<div className="col-title">What I do.</div>
					<div className="col-body">
						I am a software engineer with a passion for making things look,
						feel, and operate better. I love to push boundaries in front-end
						development to find new answers to old problems and to see what is
						really possible. My passion for this field seems to grow everyday
						because I know that I am at my best when I am creating.
					</div>
				</div>
				<div className="about-row row-skills">
					<div className="col-title">Skills.</div>
					<div className="col-body">
						<div className="sub-row">
							<div className="sub-row-title">Javascript</div>
							<div className="sub-row-body">
								Fundamentally, JavaScript is the reason web users are able to
								input information and interact with most websites they visit
								each day. The web development world changes very quickly. In the
								past, I have proven my ability to learn and adapt to new tools
								that are required for the task at hand. Some of my favorite
								frameworks and tools of late include <strong>Webpack</strong>,{' '}
								<strong>React</strong>, <strong>Redux</strong>,{' '}
								<strong>NodeJS</strong>, <strong>Express</strong>,{' '}
								<strong>AngularJS</strong>, <strong>React Native</strong>, and{' '}
								<strong>Ionic</strong>. I also have a strong understanding of
								how these tools function and how many of their patterns can be
								implemented using <strong>vanilla Javascript</strong>.
							</div>
						</div>
						<div className="sub-row">
							<div className="sub-row-title">HTML/CSS</div>
							<div className="sub-row-body">
								I excel at creating hand-coded, search engine optimized,
								professional websites using HTML & CSS. One of the aspects of
								the web that I find most exciting, as you can tell from my{' '}
								<a
									href="https://codepen.io/crodg/"
									target="_blank"
									className="para-link"
								>
									CodePen
								</a>{' '}
								or{' '}
								<a
									href="https://github.com/C-Rodg"
									target="_blank"
									className="para-link"
								>
									GitHub
								</a>{' '}
								pages, is <strong>CSS animations</strong>, which I use to bring
								my pages to life. My real expertise though, is{' '}
								<strong>responsive web design</strong>, which is a necessity in
								today's rapidly changing web world. My favorite tools which aid
								development time and help to create DRY, maintanable code
								includes the front-end framework, <strong>Bootstrap</strong>; my
								favorite CSS preprocessor, <strong>Sass</strong>; my favorite
								build tool, <strong> Webpack</strong>; and my favorite CSS
								postprocessor, <strong>PostCSS</strong>.
							</div>
						</div>
						<div className="sub-row">
							<div className="sub-row-title">Other Skills</div>
							<div className="sub-row-body">
								Mobile application development with <strong>Swift</strong>.
								Object-oriented programming with <strong>C#</strong>. Database
								management with <strong>SQL</strong> or <strong>NoSQL</strong>.{' '}
								<strong>Adobe Photoshop</strong>. Version control with{' '}
								<strong>Git</strong> or <strong>Subversion</strong>.
								Windows/Mac/Linux operating systems.
							</div>
						</div>
					</div>
				</div>
				<div className="about-row row-connect">
					<div className="col-title">Connect.</div>
					<div className="col-body">
						<div className="connect-icons">
							<a href="https://github.com/C-Rodg" target="_blank">
								<GitHub />
							</a>
							<a href="https://codepen.io/crodg/" target="_blank">
								<CodePen />
							</a>
							<a href="https://www.linkedin.com/in/crodg/" target="_blank">
								<LinkedIn />
							</a>
							<a href="mailto:rodgersbc@gmail.com" target="_blank">
								<Mail />
							</a>
							<a href="https://www.instagram.com/c_rodg" target="_blank">
								<Instagram color="#333" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutPage;
