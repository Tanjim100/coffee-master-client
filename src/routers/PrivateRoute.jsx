import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading)
    {
        return <Loading/>;
    }

    if (user && user?.email) return children;
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;