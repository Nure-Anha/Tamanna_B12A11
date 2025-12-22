import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';

const AdminDashHome = () => {

    // central Localhost 3000 of backend
        const axiosSecure = useAxiosSecure() ;

    
    const [totalDonor , setTotalDonor] = useState() ;
    useEffect(()=>{
        axiosSecure.get('/total-donor')
        .then(res => {
            console.log("Total Donor Get :", res.data) ;
            setTotalDonor(res.data.TotalDonors) ;
        })
        .catch(err => {
            console.log('Got Error in Getting Total Donor from database ' , err) ;
        })
    } , [axiosSecure])

    const [totalReq , setTotalReq] = useState() ;
    useEffect(()=>{
        axiosSecure.get('/total-blood-donation-request')
        .then(res => {
            console.log("Total Blood Donation Requsts Get :", res.data) ;
            setTotalReq(res.data.TotalRequests) ;
        })
        .catch(err => {
            console.log('Got Error in Getting Blood Donation Requests from database ' , err) ;
        })
    } , [axiosSecure])


    // Total fundings
    const[totalFunds , setTotalFunds] = useState([])
    useEffect(() => {
    axiosSecure.get('/total-fundings')
        .then(res => setTotalFunds(res.data.totalFunds));
    }, [axiosSecure]);


    return (
        <div>
            <title>Admin - Dashboard Home</title>
        <div className="text-center mt-10">
            <h3 className="text-4xl font-bold text-gray-800">Admin Dashboard</h3>
            <p className="text-gray-500 mt-2">Overview of system statistics</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
            <div className="bg-white shadow-2xl rounded-2xl p-6 text-center">
                <div className='flex justify-center items-center gap-x-2'>
                    <img className='w-7' src="/myAssets/user.png" alt="" />
                    <h3 className="text-xl font-semibold text-gray-500">Total Donors</h3>
                </div>
                <p className="text-4xl font-bold text-green-600 mt-3"> {totalDonor} </p>
            </div>
            <div className="bg-white shadow-2xl rounded-2xl p-6 text-center">
                <div className='flex justify-center items-center gap-x-2'>
                    <img className='w-8' src="/myAssets/mutual-funds.png" alt="" />
                    <h3 className="text-xl font-semibold text-gray-500">Total Fundings</h3>
                </div>
                <p className="text-4xl font-bold text-green-600 mt-3"> {totalFunds} $ </p>
            </div>
            <div className="bg-white shadow-2xl rounded-2xl p-6 text-center">
                <div className='flex justify-center items-center gap-x-2'>
                    <img className='w-7' src="/myAssets/blood-drop.png" alt="" />
                    <h3 className="text-xl font-semibold text-gray-500">Total Blood Donation Requests</h3>
                </div>
                <p className="text-4xl font-bold text-green-600 mt-3"> {totalReq} </p>
            </div>
        </div>

    </div>
    );
};

export default AdminDashHome;