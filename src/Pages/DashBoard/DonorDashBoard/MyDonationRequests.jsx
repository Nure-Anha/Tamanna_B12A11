import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';

const MyDonationRequests = () => {

    const {user} = useContext(AuthContext) ;
    

    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;

    const [recent , setRecent] = useState([]) ;
    useEffect(()=> {
        axiosSecure.get(`/all-requests?userEmail=${user?.email}`)
        .then(res => setRecent(res.data))
        .catch(err => {
            console.log('error happaneded in getting All Donation Requests :', err.message) ;
        })
        } , [user?.email , axiosSecure])
        console.log('All Donation Reqests of Logged in user: ', recent) ;


    return (
        <div>
            <title>My Donation Requests</title>
            <h3 className='text-4xl font-bold text-black text-center mt-15'>Your All Donation Requests</h3>
            <div className="overflow-x-auto mt-10 m-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-gray-500'>
                            <th>#Serial</th>
                            <th>Recipient Name</th>
                            <th>Recipient Location</th>
                            <th>Donation Date</th>
                            <th>Donation Time</th>
                            <th>Blood Group</th>
                            <th>Donation Status</th>

                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {
                            recent.map((k,index) => <tr key={k?._id} className="bg-base-200">
                            <th>{index+1} </th>
                            <td>{k?.Recipient_Name} </td>
                            <td>{k?.Recipient_District} , {k?.Recipient_Upazilla} </td>
                            <td>{k?.Donation_Date} </td>
                            <td>{k?.Donation_Time} </td>
                            <td>{k?.Blood_Group} </td>
                            <td>{k?.Donation_status} </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonationRequests;