import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	width: 270px;
	padding: 10px;
	flex-direction: column;
	gap: 10px;
`

const Label = styled.label`
    display: flex;
    width: 250px;
    justify-content: space-between;
`;

const Input = styled.input`
	width: 200px;
	height: 1.5em;
	border: 1px solid ${ ( {valid} ) => {
		if(valid === true) return '#00b0ff';
		if(valid === false) return '#ff1744';
		return '#ccc';
	} };
	border-radius: 3px;
`;

const Button = styled.button`
	width: 100%;
	height: 40px;
	border-radius: 5px;
	color: white;
	font-size: 1em;
	font-weight: bold;
	transition: transform 0.2s;

	${ ( {valid} )=>{
		if(valid) {
			return `
				cursor: pointer;
				background-color: #00b0ff;

				&:hover {
					transform: scale(1.02);
				}
			`;
		}
		return `
			background-color: #ccc;
			pointer-events: none;
		`
	} }
`;

function validateID(value)
{
	if(value === '') return null;

	const validator = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return validator.test(value);
}

function validatePW(value)
{
	if(value === '') return null;
	if (value.length < 8) return false;

	const validateToken = [/[A-Z]/, /[0-9]/, /[`_+~!@#$%^&*|\\\'\';:\/?-]/];
	return validateToken.reduce( (store, validator)=>validator.test(value) && store, true );
}

function useValidate(validator)
{
	const [valid, setState] = useState(null);

	const setValid = (value)=>{
		const isValid = validator(value);
		setState(isValid);
	};

	return [valid, setValid];
}


function Login()
{
	const idInput = useRef();
	const pwInput = useRef();
	const navigate = useNavigate();

	const [validID, setValidID] = useValidate(validateID);
	const [validPW, setValidPW] = useValidate(validatePW);

	const handleSubmit = function(e)
	{
		e.preventDefault();
		const ID = idInput.current.value;
		const PW = pwInput.current.value;
		if( !(validateID(ID) && validatePW(PW)) ) return;

//		localStorage.setItem('sessionID', ID);
//		localStorage.setItem('sessionPW', PW);
		console.log({ID, PW});
		navigate('../main', { replace: true, state: ID });
	}

	return <Form className='login' onSubmit={ handleSubmit }>
		<Label>
			<p>ID</p>
			<Input 
				type='text' 
				valid={validID} 
				ref={idInput}
				onChange={ e=>setValidID(e.target.value) }
			 />
		</Label>
		<Label>
			<p>PW</p>
			<Input 
				type='password' 
				valid={validPW} 
				ref={pwInput}
				onChange={ e=>setValidPW(e.target.value) } 
			/>
		</Label>

		<Button valid={validID && validPW} >Login</Button>
	</Form>;
}

export default Login;