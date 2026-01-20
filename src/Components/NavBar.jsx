import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Pages/Authentication/Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Pages/Authentication/Auth/FireBase.config';

const NavBar = () => {

    const {user} = useContext(AuthContext) ;

    // links 
    const links = <>
    <li className='font-bold text-base-content'><NavLink to={"/"}>Home</NavLink></li>
    <li className='font-bold text-base-content'><NavLink to={"/public-blood-donation-requests"}>Donation Requests</NavLink></li> 
    <li className='font-bold text-base-content'><NavLink to={"/about-us"}>About Us</NavLink></li> 
    {
        user && <>
        <li className='font-bold text-base-content'><NavLink to={"/fundings"}>Fundings</NavLink></li>
        <li  className='font-bold text-base-content'><NavLink to={"/become-donor"}>Become a Donor</NavLink></li> 
        </> 
    } 
    {/* <li className='font-bold text-base-content'><NavLink to={"/search-page"}>Search</NavLink></li>  */}
    </>

    // handleLogout
    const handleLogout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        console.log(error) ;
        });
    }
    return (
        <div>
            <div className="navbar bg-red-100  shadow-sm fixed top-0 z-50 w-full">
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
                        <img className='w-10 h-10 mt-2.5' src="/myAssets/blood-donation_Logo.png" alt="" />
                        <Link className="text-3xl lg:text-5xl font-bold h-14 bg-linear-65 from-red-500 to-rose-700 bg-clip-text text-transparent " to={'/'}>LifeDrop</Link>
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
                
                {
                    user ? 
                    // <div className='flex gap-x-5'><div className='tooltip tooltip-left'data-tip={user?.displayName}><img className='w-12 h-12 object-cover rounded-full' src={user?.photoURL} alt="" /></div> <Link className='btn btn-neutral mt-1' to={'/dashboard'}>Dashboard</Link> <button onClick={handleLogout} className="btn btn-neutral mt-1">Logout</button></div>
                    <div className='dropdown dropdown-end'>
                        <button className="btn btn-ghost p-0 btn-circle avatar tooltip tooltip-left" data-tip={user?.displayName} popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <img className='object-cover rounded-full' src={user?.photoURL} alt="" />
                        </button>

                        <ul className="dropdown menu rounded-box bg-base-100 shadow-sm space-y-2"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                        <Link className='btn hover:bg-rose-300  mt-1' to={'/dashboard'}>Dashboard</Link> <br />
                        <button onClick={handleLogout} className="btn bg-red-600 text-white px-7 mt-1">Logout</button>
                        </ul>
                    </div> 
                    : <Link className="btn border-red-600 hover:bg-red-600 hover:text-white" to={'/login'}>Login</Link>
                }
                </div>
            </div>
        </div>
    );
};

export default NavBar;