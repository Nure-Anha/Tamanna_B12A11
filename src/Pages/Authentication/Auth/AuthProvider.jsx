import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './FireBase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    // createUserWithEmailAndPassword:
    const regWithEmailPass = (email , pass) => {
        return createUserWithEmailAndPassword(auth, email, pass) ;
    }
    // signInWithEmailAndPassword
    const signInWithEmailPass = (email , pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // updateProfile
    const [user , setUser] = useState('') ;
     const updateProfile = (name , photo) => {
        return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
                }).then(() => {
                // Profile updated!
                 setUser({...user , displayName:name , photoURL:photo}) ;
                }).catch((error) => {
                // An error occurred
                 console.log(error.message) ;
                });
     }

    const authData = {regWithEmailPass , signInWithEmailPass ,}


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;