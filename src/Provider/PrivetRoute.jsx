import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    console.log(user);
    const location = useLocation()
    console.log(location);

    if(loading) {
        return <span className="loading loading-dots loading-xl min-h-screen flex items-center justify-center"></span>;
    }

    if(user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    
};

export default PrivetRoute;