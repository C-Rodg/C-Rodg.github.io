import React from 'react';
import styled from '@emotion/styled';
import logoImage from '../../../../assets/cr-logo.png';

// TODO: export as svg
export default function Logo() {
	return (
		<StyledLogo>
			<img src={logoImage} alt="logo" />
		</StyledLogo>
	);
}

const StyledLogo = styled.span`
	width: 85px;
	height: 85px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid ${p => p.theme.colors.primary};
	border-radius: 50%;
	padding: 13px;

	img {
		width: 100%;
		height: auto;
	}
`;
