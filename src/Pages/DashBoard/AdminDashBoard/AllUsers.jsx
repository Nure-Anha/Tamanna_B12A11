import React, {useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';

const AllUsers = () => {

    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;

    const [allusers , setAllusers] = useState([]) ;
    const fetchUser = () => {
        axiosSecure.get('/all-users')
        .then(res => setAllusers(res.data.All_Users))
        .catch(err => {
            console.log("Error occured from Getting All Users from databse " , err) ;
        })
    }
    useEffect(() => {
        fetchUser() ;
    } , [axiosSecure])


    // handleStatusUpdate
    const handleStatusUpdate = (email , status) => {
        axiosSecure.patch(`/update-user-status?myEmail=${email}&myStatus=${status}`)
        .then(res => {
            console.log(res.data) ;
            fetchUser() ;
        })
    }
    // handleRoleUpdate
    const handleRoleUpdate = (email , role) => {
        axiosSecure.patch(`/update-user-role?myEmail=${email}&myRole=${role}`)
        .then(res => {
            console.log(res.data) ;
            fetchUser() ;
        })
    }


    // filter
    const [filter , setFilter] = useState('') ;
    const handleFilterStatus = (e) => {
        setFilter(e.target.value) ;
    }
    const matched_Status = allusers.filter(p => p?.status === filter || filter === '')


    return (
        <div className='p-10'>
            <title>All Users</title>
            <div className="overflow-x-auto">
                <h4 className='text-5xl font-bold text-center mb-15 text-black'>All Users</h4>

                <div className='ml-170 mb-8'>
                    <select onChange={handleFilterStatus} defaultValue="Filter by User Status" className="select">
                        <option value=''>Filter by User Status</option>
                        <option value='active'>Active</option>
                        <option value='blocked'>Blocked</option>
                    </select>
                </div>


                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-gray-400'>
                            {/* <th><label><input type="checkbox" className="checkbox" /></label></th> */}
                            <th>User Avatar</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>User Status</th>
                            <th>Actions</th>
                            {/* <th>Block </th>
                            <th>Unblock </th>
                            <th>Volunteer  </th>
                            <th>Admin</th> */}
                        </tr>
                    </thead>
                    <tbody className='font-semibold text-black'>
                        {/* row 1 */}
                        {
                            matched_Status?.map(n => <tr key={n?._id}>
                            {/* <th><label><input type="checkbox" className="checkbox"/></label></th> */}
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={n?.Photo_URL} alt="" />
                                    </div>
                                </div>
                            </div>
                            </td>

                            <td> {n?.Name} </td>

                            <td> {n?.Email} </td>

                            <td> {n?.role} </td>
                            
                            <td> {n?.status} </td>
                            
                            <th className='relative'>
                                {
                                    n?.role !== 'admin' && <><div className="dropdown dropdown-top dropdown-end ml-5">
                                    <div tabIndex={-1} className="btn bg-transparent p-0 border-0 btn-sm">
                                        <img className='w-5' src="/myAssets/dots.png" alt="" />
                                    </div>

                                    <ul className="dropdown-content menu shadow bg-base-100 rounded-box p-2 space-y-2 w-40">
                                            {
                                                n?.status === 'active' ? <li><button onClick={()=>handleStatusUpdate(n?.Email , 'blocked')} className='btn btn-sm w-full btn-error text-white'>Block User</button></li> : <li><button onClick={()=>handleStatusUpdate(n?.Email , 'active')} className='btn btn-sm w-full bg-green-600 text-white'>Unblock User</button></li>
                                            }
                                            {
                                                n?.role === 'donor' ? <li><button onClick={()=>handleRoleUpdate(n?.Email , 'volunteer')} className='btn btn-sm w-full bg-yellow-400 text-white'>Make Volunteer</button></li> : n?.role === 'volunteer' ? <li><button onClick={()=>handleRoleUpdate(n?.Email , 'admin')} className='btn btn-sm w-full bg-blue-600 text-white '>Make Admin</button></li> : ''
                                            }
                                            {
                                                n?.role === 'donor' && <li><button onClick={()=>handleRoleUpdate(n?.Email , 'admin')} className='btn btn-sm w-full bg-blue-600 text-white '>Make Admin</button></li> 
                                            }
                                    </ul>
                                </div></>
                                }
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;