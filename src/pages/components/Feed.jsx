import React, { useState, useEffect } from 'react';
import CommentBox from './CommentBox.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 600px;
	padding: 20px;
	border: 1px solid #eeee;
	box-shadow: 2px 2px 6px #0002;

	@media only screen and (max-width: 767px) {
		width: 100%;
	}
`;

const TitleArea = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: bold;
	gap: 10px;
	margin-bottom: 10px;
`;

const Profile = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-image: linear-gradient(360deg, #ff8080, #ffd23e);
`;

const NameSpace = styled.p`
	transform: translateY(-0.125em);
`;


const ImagePlaceholder = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	max-width: 100%;
`;

const DateText = styled.p`
	text-align: end;
	font-size: 0.75em;
	color: #aaa;
`;

const Description = styled.div`
	width: 100%;
	min-height: 50px;
	padding: 5px 0px;
`;


function Feed({ name, date, image, content })
{
	const [imgSrc, setImgSrc] = useState(null);

	useEffect(()=>{
		const img = new Image();
		img.src = image;
		img.onload = ()=>{
			setImgSrc(image);
		}
	}, []);

	if (imgSrc === null) return <Wrapper>Loading...</Wrapper>;
	return <Wrapper>
		<TitleArea><Profile /><NameSpace>{name}</NameSpace></TitleArea>
		<ImagePlaceholder><Img src={image} alt="image"/></ImagePlaceholder>
		<DateText>{new Date(date).toLocaleString()}</DateText>
		<Description>{content}</Description>
		<CommentBox />
	</Wrapper>
}

export default Feed;