import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const EnterKey = 13;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
`

const CommentP = styled.p`
	width: 100%;
	min-height: 1.5em;
	word-break: break-all;
	white-space: pre-line;
`

const Bold = styled.span`
	font-weight: bold;
	padding-right: 20px;
`;

const Form = styled.form`
	width: 100%;
	min-height: 40px;
	margin-top: 10px;
	padding-top: 10px;
	border-top: 1px solid #eee;
	display: flex;
	justify-content: space-between;
`;

const Textarea = styled.textarea`
	min-height: 100%;
	resize: none;
`

const Button = styled.button`
	width: 70px;
	height: 100%;
	background-color: transparent;
	color: #00b0ff;
	cursor: pointer;
`

function extractID(str)
{
	return str.split('@')[0];
}


function Comment({userID, text})
{
	return <CommentP>
		<Bold>{userID}</Bold>{text}
	</CommentP>;
}


function CommentBox()
{
	const [comments, setComments] = useState([]);
	const myComment = useRef();
	const myButton = useRef();

	const changeHeight = function(e)
	{
		e.target.style.height = '100%';
		e.target.style.height = e.target.scrollHeight + 'px';
	}

	const handleEnter = function(e)
	{
		if(e.keyCode === EnterKey && (!e.shiftKey && !e.ctrlKey))
		{
			e.preventDefault();
			if(myButton.current) myButton.current.click();
		}
	}

	const handleSubmit = function(e)
	{
		e.preventDefault();
		const newComment = myComment.current.value;
		const userID = extractID( localStorage.getItem('sessionID') );

		setComments(comments=>[...comments, {userID, text: newComment, commentTime: Date.now()}]);
		myComment.current.value = '';
	}


	return <Div>
		{comments.map( ({userID, text, commentTime}, i)=>
			<Comment userID={userID} text={text} key={`${userID}_${commentTime}`} /> 
		)}
		<Form onSubmit={handleSubmit}>
			<Textarea cols="70" 
				placeholder="댓글달기" 
				wrap="hard" 
				onChange={changeHeight} 
				onKeyDown={handleEnter}
				ref={myComment}
			/>
			<button ref={myButton}>게시</button>
		</Form>
	</Div>
}


export default CommentBox;