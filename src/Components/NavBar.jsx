import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    // links 
    const links = <>
    <li className='font-bold text-base-content'><NavLink to={"/"}>Home</NavLink></li>
    <li className='font-bold text-base-content'><NavLink to={"/petsAndsupplies"}>Donation Requests</NavLink></li> </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-8 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                    </div>

                    <div className='flex'>
                        <img className='w-12 h-12 mt-2.5' src="/public/myAssets/blood-donation_Logo.png" alt="" />
                        <a className="text-3xl lg:text-5xl font-bold h-14 bg-linear-65 from-red-500 to-rose-700 bg-clip-text text-transparent mt-2">LifeDrop</a>
                    </div>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* <a className="btn border-red-600 hover:bg-red-600 hover:text-white">Login</a> */}
                    <Link className="btn border-red-600 hover:bg-red-600 hover:text-white" to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;