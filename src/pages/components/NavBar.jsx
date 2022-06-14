import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ImageButton from './ImageButton.jsx';
import Logo from './Logo.jsx';

const Nav = styled.nav`
	position: fixed;
	width: 100%;
	height: 60px;
	background-color: white;
	box-shadow: 0px 2px 5px #0002;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 1200px;
	height: 100%;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 1200px) {
		width: 100%;
	}
`;

const Input = styled.input`
	width: 300px;
	height: 30px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0px 10px 0px 30px;
	background-image: url('assets/search.svg');
	background-size: 20px;
	background-position: 5px center;
	background-repeat: no-repeat;

	@media only screen and (max-width: 767px) {
		display: none;
	}
`;

const Buttons = styled.div`
	width: 160px;
	display: flex;
	justify-content: right;
	gap: 20px;
`;

function LogoutButton()
{
	const navigate = useNavigate();

	function logout()
	{
		localStorage.removeItem('sessionID');
		localStorage.removeItem('sessionPW');
		navigate('../login', { replace: true });
	}

	return <ImageButton image="assets/logout.svg" onClick={logout} />
}

function NavBar()
{
	return <Nav>
		<Wrapper>
			<Logo />
			<Input placeholder="Search"></Input>
			<Buttons>
				<ImageButton image="assets/navigate.svg" />
				<ImageButton image="assets/heart.svg" onClick={()=>console.log( localStorage.getItem('sessionID') )}/>
				<LogoutButton />
			</Buttons>
		</Wrapper>
	</Nav>;
}

export default NavBar;