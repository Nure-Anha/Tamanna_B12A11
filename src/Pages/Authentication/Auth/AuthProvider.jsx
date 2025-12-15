import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './FireBase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

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
    //  Get the currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (curr_user) => {
        setUser(curr_user) ;
        });
        return unsubscribe ;
    }, [])

    // GetRole for specific email
    const [role , setRole] = useState('') ;
    useEffect(()=>{
        if(!user) return ;
             axios.get(`http://localhost:3000/users/role/${user?.email}`)
            .then(res => {
                console.log("matched email's role get:" , res.data.role) ;
                setRole(res.data.role) ;
            })
            .catch(err => {
                console.log("Error matched email", err) ;
            }) 
    } , [user])


    const authData = {regWithEmailPass , signInWithEmailPass , user ,}


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;