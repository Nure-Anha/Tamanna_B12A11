import React, { useContext } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivatePage = ({children}) => {

    const {user , loading} = useContext(AuthContext) ;

    if(loading) {
        return <span className="loading loading-spinner loading-xl ml-170 mt-50"></span>
    }
    if(!user){
        return <Navigate state={location?.pathname} to={'/'}></Navigate>
    }


    return children ;
};

export default PrivatePage;