import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import { Link } from 'react-router';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';

const DonorDashHome = () => {

    const {user} = useContext(AuthContext) ;

    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;

    const [recent , setRecent] = useState([]) ;
    const fetchUser = () => {
        axiosSecure.get(`/recent?userEmail=${user?.email}`)
        .then(res => setRecent(res.data))
        .catch(err => {
            console.log('error happaneded in getting latest Recent Donation Requests :', err.message) ;
        })
    }
    useEffect(()=> {
        fetchUser() ;
        } , [user?.email , axiosSecure])
        console.log('Recent Donation Reqs: ', recent) ;


    // handleStatusUpdate
    const handleDonationStatus = (id , DonationStatus) => {
        axiosSecure.patch(`/update-donation-status?my_id=${id}&myDonationStatus=${DonationStatus}`)
        .then(res => {
            console.log(res.data) ;
            fetchUser() ;
        })
    }


    return (
        <div>
            <title>Donor-Dashboard-Home</title>
            {
                recent.length !== 0 ? <><h3 className='text-3xl font-bold text-black text-center mt-10'>Recent Donation Requests</h3>
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
                            <th>Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {
                            recent?.map((k,index) => <tr key={k?._id} className="bg-base-200">
                            <th>{index+1} </th>
                            <td>{k?.Recipient_Name} </td>
                            <td>{k?.Recipient_District} , {k?.Recipient_Upazilla} </td>
                            <td>{k?.Donation_Date} </td>
                            <td>{k?.Donation_Time} </td>
                            <td>{k?.Blood_Group} </td>
                            <td>{k?.Donation_status} </td>

                            {/* <td>
                                {
                                    k?.Donation_status === 'inprogress' && <button onClick={()=>handleDonationStatus(k?.Requester_Email , k?.Donation_status)} className='btn'>Done</button> 
                                }
                                {
                                    k?.Donation_status === 'inprogress' && <button onClick={()=>handleDonationStatus(k?.Requester_Email , k?.Donation_status)} className='btn btn-error'>Cancel</button> 
                                }
                            </td> */}


                            <th className='relative'>
                                {
                                    k?.Donation_status === 'inprogress' ? <div className="dropdown  dropdown-end ml-5">
                                    <div tabIndex={-1} className="btn bg-transparent p-0 border-0 btn-sm">
                                        <img className='w-5' src="/myAssets/dots.png" alt="" />
                                    </div>

                                    <ul className="dropdown-content menu shadow bg-base-100 rounded-box  w-30 p-2 space-y-2">
                                            {
                                                k?.Donation_status === 'inprogress' && <><li><button onClick={()=>handleDonationStatus(k?._id , 'done')} className='btn btn-sm w-full bg-green-600 text-white'>Done</button></li> <li><button onClick={()=>handleDonationStatus(k?._id , 'cancelled')} className='btn btn-sm w-full btn-error text-white'>Cancel</button></li>  </> 
                                            }
                                    </ul>
                                </div> : ''
                                }
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
                <Link to={'/dashboard/my-donation-requests'} className='btn mt-20 ml-100 bg-green-600 text-white hover:bg-rose-400'>View My All Request</Link>
            </div></> : <p className='text-3xl text-red-600 text-center mt-20 font-semibold'>Recent Donation Request is not Created Yet!!!</p>
            }
        </div>
    );
};

export default DonorDashHome;