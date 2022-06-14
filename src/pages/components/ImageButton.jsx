import styled from 'styled-components';

const ImageButton = styled.button`
	width: 40px;
	height: 40px;
	cursor: pointer;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.1);
	}

	${
		( {image} )=>{
			if(image) return `
				background-image: url("${image}");
				background-size: 30px;
				background-position: center;
				background-color: transparent;
				background-repeat: no-repeat;
			`;
			return `
				background-color: #24adaf;
				border-radius: 3px;
			`
		}
	}
`;

export default ImageButton;