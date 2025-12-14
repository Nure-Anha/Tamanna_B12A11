import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
             <Link className="btn border-red-600 hover:bg-red-600 hover:text-white" to={'/register'}>Register</Link>
        </div>
    );
};

export default Login;