import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '../../Components/SideBar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen">
            <SideBar />

            <div className="flex-1 bg-[#f1f6fa]">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;