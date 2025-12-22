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


    const [deleteReq , setDeleteReq] = useState(null) ;
    // handleDeleteBtn
    const handleDeleteBtn = (id) => {
        setDeleteReq(id) ;
        // modal er btn onclick function ekhne ana hyse
        document.getElementById('my_modal_1').showModal() ;   
    }

    //  del from datatbase
    const handleDelFromDatabase = (id) => {
        axiosSecure.delete(`/delete-req/${id}`)
        .then(res => {
            console.log('deleted req', res.data) ;
            document.getElementById('my_modal_1').close();
            fetchUser();
        })
        .catch(err => {
            console.log("error in delete req" , err) ;
        })
    }



    return (
        <div>
            <title>Donor-Dashboard-Home</title>
            {
                recent.length !== 0 ? <><h3 className='text-3xl font-bold text-center mt-10'>Recent Donation Requests</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-gray-500'>
                            <th>#Serial</th>
                            <th>Recipient <br /> Name</th>
                            <th>Recipient <br /> Location</th>
                            <th>Donation <br /> Date</th>
                            <th>Donation <br /> Time</th>
                            <th>Blood <br /> Group</th>
                            <th>Donation <br /> Status</th>
                            <th>Donor <br /> Information</th>
                            <th>Actions</th>

                        </tr>
                    </thead>

                    <tbody className='font-semibold'>
                        {/* row 1 */}
                        {
                            recent?.map((k,index) => <tr key={k?._id} className="bg-base-200">
                            <th>{index+1}</th>
                            <td>{k?.Recipient_Name} </td>
                            <td>{k?.Recipient_District} , {k?.Recipient_Upazilla} </td>
                            <td>{k?.Donation_Date} </td>
                            <td>{k?.Donation_Time} </td>
                            <td>{k?.Blood_Group} </td>
                            <td>{k?.Donation_status}</td>
                            <td>
                                {
                                    k?.Donation_status === 'inprogress' && <><p> {k?.Requester_Name} </p> <small className='text-gray-700'> {k?.Requester_Email} </small></>
                                }
                            </td>


                            <th className='relative'>
                                    <Link to={`/dashboard/edit-donation-request/${k?._id}`} className="btn btn-sm bg-sky-500 text-white">Edit</Link>
                                    
                                    <button onClick={()=> handleDeleteBtn(k?._id)} className="btn bg-red-500 btn-sm text-white">Delete</button> 

                                    <Link to={`/blood-donation-request-details/${k?._id}`} className="btn btn-sm bg-violet-500 text-white">View</Link>    

                                {
                                    k?.Donation_status === 'inprogress' ? <div className="dropdown  dropdown-end ">
                                    <button tabIndex={-1} className="btn border bg-transparent p-4 hover:bg-gray-200 btn-sm">
                                        <img className='w-5' src="/myAssets/dots.png" alt="" />
                                    </button>

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
            </div> 
            <Link to={'/dashboard/my-donation-requests'} className='btn mt-20 ml-15 lg:ml-100 bg-green-600 text-white hover:bg-rose-400'>View My All Request</Link>
            </> : <p className='text-3xl text-blue-600 text-center mt-20 font-bold'>Recently No Donation Request is Created !!!</p>
            }

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-red-600 text-lg">Are You Sure You Want To Delete this Donation Request?</h3>
                    <p className="py-4 text-gray-600 font-normal">This action cannot be undone!!!</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleDelFromDatabase} className="btn">Close</button>
                    </form>
                    <button onClick={()=> handleDelFromDatabase(deleteReq)} className="btn btn-error text-white">
                        Yes, Delete</button>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default DonorDashHome;