import React, { useState, useEffect } from 'react';

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

	if (imgSrc === null) return <div>Loading...</div>;
	return <div>
		<div>{name}</div>
		<img src={image} alt="image"/>
		<div>{new Date(date).toLocaleString()}</div>
		<div>{content}</div>
	</div>
}

export default Feed;