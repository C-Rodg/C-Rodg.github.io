import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor } from '@types';

function Bio({ author }: IAuthor) {
	return (
		<BioContainer>
			<BioAvatar
				as={author.authorsPage ? Link : 'div'}
				to={author.slug}
				data-a11y="false"
				aria-label="Author's bio"
			>
				<BioAvatarInner>
					<Image src={author.avatar.medium} />
				</BioAvatarInner>
			</BioAvatar>
			<BioText>
				{author.bio}

				<br />
				<ConnectLink
					target="_blank"
					rel="noopener"
					data-a11y="false"
					href="mailto:&#114;&#111;&#100;&#103;&#101;&#114;&#115;&#098;&#099;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
				>
					Let's Connect!
				</ConnectLink>
			</BioText>
		</BioContainer>
	);
}

export default Bio;

const BioContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	left: -10px;
`;

const BioAvatar = styled.div`
	display: block;
	position: relative;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.25);
	margin-right: 16px;
	margin: 10px 26px 10px 10px;

	&::after {
		content: '';
		position: absolute;
		left: -5px;
		top: -5px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.25);
	}

	&[data-a11y='true']:focus::after {
		content: '';
		position: absolute;
		left: -5px;
		top: -5px;
		width: 50px;
		height: 50px;
		border: 2px solid ${p => p.theme.colors.accent};
	}
`;

const BioAvatarInner = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.25);
	margin-right: 16px;
	overflow: hidden;
`;

const BioText = styled.p`
	max-width: 430px;
	font-size: 14px;
	line-height: 1.45;
	color: ${p => p.theme.colors.grey};
`;

const ConnectLink = styled.a`
	display: inline-block;
	background-color: transparent;
	color: ${p => p.theme.colors.primary};
	border: 1px solid ${p => p.theme.colors.primary};
	padding: 10px 15px;
	margin-top: 12px;
	text-transform: uppercase;
	cursor: pointer;
	border-radius: 2px;
	letter-spacing: 0.03rem;
	font-weight: 500;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: ${p => p.theme.colors.primary};
		color: ${p => p.theme.colors.background};
	}
`;
