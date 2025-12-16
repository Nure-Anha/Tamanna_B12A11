import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './Auth/AuthContext';

const Login = () => {

    const {signInWithEmailPass} = useContext(AuthContext) ;

    const location = useLocation() ;
    const navigate = useNavigate() ;

    // handleLogin
    const handleLogin = (e) => {
        e.preventDefault() ;

        const email = e.target.email.value ;
        console.log("email: ", email) ;
        const pass = e.target.pass.value ;
        console.log("pass: ", pass) ;

        e.target.reset() ;
        
        // signInWithEmailPass
        signInWithEmailPass(email , pass) 
        .then(res => {
            console.log('Signed In With EmailPass :', res.user) ;
            navigate(location.state ? location.state : '/') ;
        })
        .catch((error) => {
            console.log("error sign in :" , error.message) ;
        });


    }


    return (
        <div className='bg-[#f1f6fa] '>
            <title>Login</title>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col  bg-white md:w-100 lg:w-150 p-10 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5 dark:text-black">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='pass' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-neutral mt-4">Login</button>
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