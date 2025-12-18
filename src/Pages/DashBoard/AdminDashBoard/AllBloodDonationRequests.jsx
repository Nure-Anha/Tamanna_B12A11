import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';

const AllBloodDonationRequests = () => {

    const {user} = useContext(AuthContext) ;
    

    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;

    const [recent , setRecent] = useState([]) ;
    useEffect(()=> {
        axiosSecure.get('/all-blood-donation-requests')
        .then(res => setRecent(res.data))
        .catch(err => {
            console.log('error happaneded in getting All Donation Requests :', err.message) ;
        })
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
                    <option value="canceled">Canceled</option>
                </select>
            </div>

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
                            matched_Requests?.map((k,index) => <tr key={k?._id} className="bg-base-200">
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
        </div>
    );
};

export default AllBloodDonationRequests;