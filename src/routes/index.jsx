import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import UserLayout from '../layouts/UserLayout';
import Login from '../views/Login';
import SignUp from '../views/Signup';
import Forgot from '../views/ForgotPassword';

const FrontendRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<UserLayout />} >
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/forgot' element={<Forgot />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default FrontendRoutes;
