import React from "react";
import Footer from "./Footer";
const GitHub = require("react-feather/dist/icons/github").default;
const Mail = require("react-feather/dist/icons/mail").default;
const CodePen = require("react-feather/dist/icons/codepen").default;
const Instagram = require("react-feather/dist/icons/instagram").default;
import LinkedIn from "../extras/linkedIn";

import "../styles/contact.scss";

const ContactPage = () => {
	return (
		<div className="contact-page">
			<div className="container">
				<div className="row">
					<div className="col-form">
						<form
							action="https://formspree.io/rodgersbc@gmail.com"
							method="POST"
						>
							<label htmlFor="name" className="form-label">
								Name:
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your full name"
								required
							/>
							<label htmlFor="email" className="form-label">
								Email:
							</label>
							<input
								type="email"
								name="email"
								placeholder="email@example.com"
								required
							/>
							<label htmlFor="phone" className="form-label">
								Phone:
							</label>
							<input type="tel" name="phone" placeholder="(xxx) xxx-xxxx" />
							<label htmlFor="message" className="form-label">
								Message:
							</label>
							<textarea
								name="message"
								placeholder="What's on your mind?"
								required
							/>
							<button type="submit" className="submit-btn">
								Submit
							</button>
							<input
								type="hidden"
								name="_subject"
								value="New request from CurtisRodgers.com"
							/>
						</form>
					</div>
					<div className="col-contact">
						<div className="contact-title">Want to work together?</div>
						<div className="title-sub">
							Fill out the form, or reach out to me through social media.
						</div>
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

export default ContactPage;
