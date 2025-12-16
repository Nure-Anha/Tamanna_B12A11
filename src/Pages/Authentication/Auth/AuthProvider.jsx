import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './FireBase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({children}) => {

    // loading
    const [loading , setLoading] = useState(true) ;



    // createUserWithEmailAndPassword:
    const regWithEmailPass = (email , pass) => {
        return createUserWithEmailAndPassword(auth, email, pass) ;
    }
    // signInWithEmailAndPassword
    const signInWithEmailPass = (email , pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // updateProfile
    const [user , setUser] = useState(null) ;
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
        setLoading(false) ;
        });
        return unsubscribe ;
    }, [])


    // My Get_Role functionality for specific email
    const [role , setRole] = useState('') ;
    const [status , setStatus] = useState('') ;
    useEffect(()=>{
        if(!user) {
            return ;
        }
        axios.get(`http://localhost:3000/users/${user?.email}`)
        .then(res => {
            console.log("matched email's Role got:" , res.data.role) ;  // Role retrieve globally for use anywhere
            setRole(res.data.role) ;
            console.log("matched email's Status got:" , res.data.status) ;
            setStatus(res.data.status) ;
        })
        .catch(err => {
            console.log("Error matched email", err) ;
        }) 
    } , [user])


    const authData = {regWithEmailPass , signInWithEmailPass , user , role , status , loading ,}


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;