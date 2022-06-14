import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	width: 160px;
`;

export default function Logo()
{
	return <Img src="assets/instagram_logo.svg" alt="fakestagram_logo" />
}