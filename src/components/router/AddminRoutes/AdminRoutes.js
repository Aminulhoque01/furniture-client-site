import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const AdminRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email); 
    const location = useLocation();

    if( loader || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{form:location }} replace></Navigate>
    
};

export default AdminRoutes;