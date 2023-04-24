import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoutes = () => {

    const { user } = useSelector(state => state.auth);

    const location = useLocation();

    return(
        user ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />
    )

};

export default PrivateRoutes;