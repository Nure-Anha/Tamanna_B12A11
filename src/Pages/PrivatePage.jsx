import React, { useContext } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import { Navigate} from 'react-router';

const PrivatePage = ({children}) => {

    const {user , loading , roleLoading , status} = useContext(AuthContext) ;

    if(loading || (user && roleLoading)) {
        return <span className="loading loading-spinner loading-xl ml-170 mt-50"></span>
    }

    if(!user || status !== "active"){
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
        // return <Navigate to={'/login'}></Navigate>
    }


    return children ;
};

export default PrivatePage;