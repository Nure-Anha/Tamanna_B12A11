import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import { Link } from 'react-router';

const DonorDashHome = () => {

    const {user} = useContext(AuthContext) ;
    console.log("Logged in user email:", user?.email);


    const [recent , setRecent] = useState([]) ;
    useEffect(()=> {
        fetch(`http://localhost:3000/recent?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setRecent(data))
        .catch(err => {
            console.log('error happaneded in getting latest Recent Donation Requests :', err.message) ;
        })
    } , [user?.email])
        console.log('Recent Donation Reqs: ', recent) ;


    return (
        <div>
            <title>Donor-Dashboard-Home</title>
            <h3 className='text-3xl font-bold text-black text-center mt-10'>Recent Donation Requests</h3>
            <div className="overflow-x-auto mt-5">
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
                <Link to={'/dashboard/my-donation-requests'} className='btn mt-20 ml-100 bg-green-600 text-white hover:bg-rose-400'>View My All Request</Link>
            </div>
        </div>
    );
};

export default DonorDashHome;