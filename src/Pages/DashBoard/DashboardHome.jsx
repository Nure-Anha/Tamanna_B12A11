import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';
import AdminDashHome from './AdminDashBoard/AdminDashHome';
import DonorDashHome from './DonorDashBoard/DonorDashHome';
import VolunDashHome from './VolunteerDashboard/VolunDashHome';

const DashboardHome = () => {

    const {user , role} = useContext(AuthContext) ;

    return (
        <div className='p-10 rounded-2xl'>
            <title>Dashboard-Home</title>
            <div>
                <h2 className="text-4xl font-bold text-black "> Welcome, {user?.displayName}!</h2>

                {role === "donor" && <DonorDashHome></DonorDashHome>}
                {role === "admin" && <AdminDashHome></AdminDashHome>}
                {role === "volunteer" && <VolunDashHome></VolunDashHome>}

            </div>
        </div>
    );
};

export default DashboardHome;