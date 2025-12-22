import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '../../Components/SideBar';

const DashboardLayout = () => {
    return (
        // <div className="flex flex-col lg:flex-row min-h-screen">
        //     <SideBar />

        //     <div className="flex-1 bg-[#f1f6fa]">
        //         <Outlet />
        //     </div>
        // </div>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            {/* <div className="drawer-content"> */}
                {/* Page content here */}
                {/* <Outlet></Outlet>
                <label htmlFor="my-drawer-1" className="btn drawer-button">Open drawer</label> */}
            {/* </div> */}
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-red-800 text-white lg:hidden">
                <label htmlFor="my-drawer-1" className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                                        </svg>
                </label>
                <span className="ml-2 font-bold">Dashboard</span>
                </div>

                
                <div className="p-4">
                <Outlet></Outlet>
                </div>
            </div>
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className="menu bg-base-200 min-h-full w-80 p-4"> */}
                {/* Sidebar content here */}
                <SideBar></SideBar>
                {/* </ul> */}
            </div>
        </div>
    );
};

export default DashboardLayout;