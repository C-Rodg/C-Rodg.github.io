import React from 'react';

const MailIcon = ({ fill = 'white' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		width="17"
		height="17"
		stroke={fill}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="no-fill"
	>
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		<polyline points="22,6 12,13 2,6" />
	</svg>
);

export default MailIcon;
