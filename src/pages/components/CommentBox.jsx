import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const CommentP = styled.p`
	width: 100%;
	height: 1.5em;
`

const Bold = styled.span`
	font-weight: bold;
	padding-right: 20px;
`;



function Comment({userID, text})
{
	return <CommentP>
		<Bold>{userID}</Bold>{text}
	</CommentP>;
}


function CommentBox()
{
	const [comments, setComments] = useState([ {userID:'35P', text:'Miko is Baby!', commentTime:0} ]);
	const myComment = useRef();

	const handleSubmit = function(e)
	{
		e.preventDefault();
		const newComment = myComment.current.value;
		const userID = localStorage.getItem('sessionID');

		setComments(comments=>[...comments, {userID, text: newComment, commentTime: Date.now()}]);
		myComment.current.value = '';
	}


	return <Div>
		{comments.map( ({userID, text, commentTime}, i)=>
			<Comment userID={userID} text={text} key={`${userID}_${commentTime}`} /> 
		)}
		<form onSubmit={handleSubmit}>
			<input type='textarea' ref={myComment}/>
			<button>submit</button>
		</form>
	</Div>
}


export default CommentBox;