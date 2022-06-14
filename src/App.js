import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login.jsx';

function Main() {
	return <main>This is Main!</main>;
}

function NotFound() {
	return <main>404 not found</main>;
}

function App() {
	return <Routes>
		<Route path='/' element={false ? <Main /> : <Navigate replace to='/login' />} />
		<Route path='/login' element={<Login />} />
		<Route path='/main' element={<Main />} />
		<Route path='*' element={<NotFound />} />
	</Routes>;
}

export default App;
