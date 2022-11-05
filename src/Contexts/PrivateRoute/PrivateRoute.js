import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        <h2>Loading...</h2>
    }
    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;