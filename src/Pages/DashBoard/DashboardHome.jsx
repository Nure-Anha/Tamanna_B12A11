import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';
import AdminDashHome from './AdminDashBoard/AdminDashHome';
import DonorDashHome from './DonorDashBoard/DonorDashHome';
import VolunDashHome from './VolunteerDashboard/VolunDashHome';

const DashboardHome = () => {

    const {user} = useContext(AuthContext) ;
    console.log("User:" , user) ;

    return (
        <div className='p-10 rounded-2xl'>
            <div>
                <h2 className="text-3xl font-bold mb-6 p-20 "> Welcome, {user?.displayName}</h2>

                {user?.role === "donor" && <DonorDashHome></DonorDashHome>}
                {user?.role === "admin" && <AdminDashHome></AdminDashHome>}
                {user?.role === "volunteer" && <VolunDashHome></VolunDashHome>}

            </div>
        </div>
    );
};

export default DashboardHome;