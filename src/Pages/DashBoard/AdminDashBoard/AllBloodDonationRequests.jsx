import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { Link } from 'react-router';

const AllBloodDonationRequests = () => {

    const {user , role} = useContext(AuthContext) ;
    

    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;
    const fetchUser = () => {
        axiosSecure.get('/all-blood-donation-requests')
        .then(res => setRecent(res.data))
        .catch(err => {
            console.log('error happaneded in getting All Donation Requests :', err.message) ;
        })
    }
    const [recent , setRecent] = useState([]) ;
    useEffect(()=> {
        fetchUser() ;
        } , [user?.email , axiosSecure])
        console.log('All Donation Reqests of Logged in user: ', recent) ;


        // Filter Requests By Status
        const [filter , setFilter] = useState('') ;
        // handleFilterReq
        const handleFilterReq = (e) => {
            setFilter(e.target.value) ;
        }

        const matched_Requests = recent.filter(m => m.Donation_status === filter || filter === '') ;


        // paginatiom
        // const [page, setPage] = useState(1);       
        // const [limit] = useState(2); 
        // const startIndex = (page - 1) * limit;
        // const paginated_Requests = matched_Requests.slice(startIndex, startIndex + limit);
        // const totalPages = Math.ceil(matched_Requests.length / limit);



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
            <title>All Blood Donation Request</title>

            {
                recent.length !== 0 ? <><h3 className='text-4xl font-bold text-black text-center mt-15'>Your All Donation Requests</h3>

            <div className="mt-15 ml-180">
                <select onChange={handleFilterReq} className="select">
                    <option value="">Filter Donation Requests by Status</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="cancelled">Cancelled</option>
                </select> 
            </div>

            <div className="overflow-x-auto mt-10 m-10">
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

                    <tbody>
                        {/* row 1 */}
                        {
                            matched_Requests?.map((k,index) => <tr key={k?._id} className="bg-base-200">
                            <th>{index+1} </th>
                            <td>{k?.Recipient_Name} </td>
                            <td>{k?.Recipient_District} , {k?.Recipient_Upazilla} </td>
                            <td>{k?.Donation_Date} </td>
                            <td>{k?.Donation_Time} </td>
                            <td>{k?.Blood_Group} </td>
                            <td>{k?.Donation_status} </td>
                            <td>
                                {
                                    k?.Donation_status === 'inprogress' && <><p> {k?.Requester_Name} </p> <small className='text-gray-700'> {k?.Requester_Email} </small></>
                                }
                            </td>

                            <th className='relative'>
                                
                                    {
                                        role === 'admin' && <><Link to={`/dashboard/edit-donation-request/${k?._id}`} className="btn btn-sm bg-sky-300 ">Edit</Link>
                                    
                                        <button onClick={()=> handleDeleteBtn(k?._id)} className="btn bg-red-300 btn-sm ">Delete</button> </>
                                    }
                                    

                                    {
                                        (role === 'admin' || role === 'volunteer' ) && <Link to={'/dashboard/donation-request-details'} className="btn btn-sm bg-violet-300 ">View</Link> 
                                    }

                                {/* {
                                    (k?.Donation_status === 'inprogress' || k?.Donation_status === 'pending') && <div className="dropdown  dropdown-end ml-5">
                                    <div tabIndex={-1} className="btn bg-transparent p-0 border-0 btn-sm">
                                        <img className='w-5' src="/myAssets/dots.png" alt="" />
                                    </div>

                                    <ul className="dropdown-content menu shadow bg-base-100 rounded-box  w-30 p-2 space-y-2">
                                            {
                                                (k?.Donation_status === 'inprogress' || k?.Donation_status === 'pending') && <><li><button onClick={()=>handleDonationStatus(k?._id , 'done')} className='btn btn-sm w-full bg-green-600 text-white'>Done</button></li> <li><button onClick={()=>handleDonationStatus(k?._id , 'cancelled')} className='btn btn-sm w-full btn-error text-white'>Cancel</button></li>  </> 
                                            }

                                            {
                                                k?.Donation_status === 'pending' && <> <li><button onClick={()=>handleDonationStatus(k._id,'inprogress')} className="btn bg-yellow-400 btn-sm w-full">Inprogress</button></li> </>
                                            }
                                    </ul>
                                </div> 
                                } */}
                                <div className="dropdown dropdown-end ml-5">
                                    <div tabIndex={0} className="btn btn-ghost p-0 btn-sm">
                                        <img className='w-5' src="/myAssets/dots.png" alt="menu" />
                                    </div>

                                    <ul className="dropdown-content menu shadow bg-base-100 rounded-box w-40 p-2     space-y-2">
                                            <li><button onClick={() => handleDonationStatus(k._id, "pending")}className="btn btn-xs w-full bg-yellow-400">Pending</button></li>

                                            <li><button onClick={() => handleDonationStatus(k._id, "inprogress")}
                                                className="btn btn-xs w-full bg-blue-500 text-white"
                                                >In Progress</button></li>

                                            <li><button onClick={() => handleDonationStatus(k._id, "done")} className="btn btn-xs w-full bg-green-600 text-white" >Done</button></li>

                                            <li> <button onClick={() => handleDonationStatus(k._id, "cancelled")}
                                                className="btn btn-xs w-full bg-red-500 text-white">Cancelled</button>
                                                </li>
                                     </ul>
</div>

                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* <div className="join mt-5 flex justify-center">
                {
                    [...Array(totalPages).keys()].map(num => (
                    <button key={num} className={`join-item btn ${page === num + 1 ? 'btn-active' : ''}`} onClick={() => setPage(num + 1)}>
                        {num + 1}
                    </button>
                    ))
                }
           </div> */}</> : <p className='text-3xl text-red-600 text-center mt-50 font-semibold'>Donation Request is not Created Yet!!!</p>
            }

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-red-600 text-lg">Are You Sure You Want To Delete this Donation Request?</h3>
                    <p className="py-4 text-gray-600 font-normal">This action cannot be undone!!!</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    <button onClick={()=> handleDelFromDatabase(deleteReq)} className="btn btn-error text-white">
                        Yes, Delete</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllBloodDonationRequests;