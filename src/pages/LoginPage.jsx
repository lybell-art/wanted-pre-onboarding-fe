import React from 'react';
import Logo from './components/Logo.jsx';
import Login from './components/Login.jsx';
import styled from 'styled-components';

const ScreenDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
	border-radius: 5px;
	box-shadow: 2px 2px 5px #0003;
	display: flex;
    flex-direction: column;
    align-items: center;
`;

function LoginPage()
{
	return <ScreenDiv>
		<Wrapper>
			<Logo />
			<Login />
		</Wrapper>
	</ScreenDiv>
}

export default LoginPage;