import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signInWithEmailPass , signInWithGoogle} = useContext(AuthContext) ;

    const location = useLocation() ;
    const navigate = useNavigate() ;

    const [error , setError] = useState('') ;
    // handleLogin
    const handleLogin = (e) => {
        e.preventDefault() ;

        // const email = e.target.email.value ;
        // console.log("email: ", email) ;
        // const pass = e.target.pass.value ;
        // console.log("pass: ", pass) ;

        // e.target.reset() ;
        setError('')
        
        // signInWithEmailPass
        signInWithEmailPass(email , pass) 
        .then(res => {
            console.log('Signed In With EmailPass :', res.user) ;
            Swal.fire({
                title: "Good!",
                text: "Login Successfully!",
                icon: "success"
                });
            navigate(location.state ? location.state : '/') ;
        })
        .catch((error) => {
            console.log("error sign in :" , error.message) ;
            setError(error.message) ;
        });


    }

    // handleGoogleSignIn
    const handleGoogleSignIn = () => {
        
        //signInWithGoogle
        signInWithGoogle()
        .then((resG) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("New User Registered by Google: ", resG.user) ;
        Swal.fire({
        title: "Good!",
        text: "Login Successfully!",
        icon: "success"
        });
        navigate(location.state ? location.state : '/') ;
        // ...
        }).catch((errG) => {
        // Handle Errors here.
        console.log(errG.code);
        console.log(errG.message);
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong"
        });
        });
    }

    // demo creditials
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        <div className='bg-[#f1f6fa] '>
            <title>Login</title>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col  bg-white md:w-100 lg:w-150 p-10 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5 text-black">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" name='email' value={email} className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input onChange={(e) => setPass(e.target.value)} type='password' name='pass' value={pass} className="input" placeholder="Password" />
                                {
                                    error && <p className='text-red-500'> {error} </p>
                                }
                                <div><a className="link link-hover">Forgot password?</a></div>

                                 {/* demo login */}
                                <div className="mt-4 space-y-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                        setEmail("demo@lifedrop.com");
                                        setPass("Demo1234");
                                        }}
                                        className="btn btn-outline w-full">
                                        Login as Demo User
                                    </button>
                                </div>

                                <button className="btn btn-neutral mt-4">Login</button>

                                <button type='button' onClick={handleGoogleSignIn} className="btn mt-4 text-gray-700"><FcGoogle className='text-2xl' />Login With Google</button>
                            </fieldset>
                        </form>
                        <p className='text-md font-medium text-center'>Don't have an account?<Link className='text-blue-600 font-bold' to={'/register'}> Register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;