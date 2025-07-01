// src/components/LoginRouter.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserLogin from './UserLogin';
import ImExpLogin from './ImExpLogin';

const LoginRouter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get('role');

    useEffect(() => {
        if (!role || !['admin', 'imp-exp', 'icmr', 'committee'].includes(role)) {
            navigate('/');
        }
    }, [role, navigate]);
    if (role === 'admin') {
        <h2>Super Admin Login</h2>
        return <UserLogin />;
    } else if (role === 'imp-exp') {
        <h2>Importer Exporter Login</h2>
        return <ImExpLogin />;
    } else if (role === 'icmr') {
        <h2>ICMR Officer Login</h2>
        return <UserLogin />;
    } else if (role === 'committee') {
        <h2>ICMR Officer Login</h2>
        return <UserLogin />;
    }

    return null; // While redirecting
};

export default LoginRouter;
