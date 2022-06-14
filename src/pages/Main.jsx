import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar.jsx';
import Feed from './components/Feed.jsx';

const LongDiv = styled.div`
	width: 100%;
	height: 9999px;
	background-image: linear-gradient(180deg, #ffdfc5, #fe8093, #bf4243);
	background-color: #fe8093;
`;

function Main()
{
	return <>
		<NavBar></NavBar>
		<main>
			<Feed 
				name="yes" 
				date={1650000000000} 
				image="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" 
				content="test" 
			/>
		</main>
	</>;
}

export default Main;