import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';

function NotFound() {
	return <main>404 not found</main>;
}

function App() {
	function checkSession()
	{
		return localStorage.getItem('sessionID') && localStorage.getItem('sessionPW');
	}

	return <Routes>
		<Route path='/' element={checkSession() ? <Main /> : <Navigate replace to='/login' />} />
		<Route path='/login' element={<Login />} />
		<Route path='/main' element={<Main />} />
		<Route path='*' element={<NotFound />} />
	</Routes>;
}

export default App;
