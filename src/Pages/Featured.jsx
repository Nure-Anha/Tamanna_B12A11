import React, { useEffect, useState } from 'react';
import useAxios from '../CustomHooks/useAxios'

const Featured = () => {

    // const axiosSecure = useAxiosSecure() ;
    const axiosInstance = useAxios() ;

    const [requestDone , setRequestDone] = useState([]) ;
    useEffect(()=>{
        axiosInstance.get('/requests-fulfilled')
        .then(res => {
            console.log(res.data) ;
            setRequestDone(res.data) ;
        })
    } , [axiosInstance])



    const [roleDonor , setRoleDonor] = useState([]) ;
    useEffect(()=>{
        axiosInstance.get('/active-donors')
        .then(res => {
            console.log(res.data) ;
            setRoleDonor(res.data) ;
        })
    } , [axiosInstance])


    return (
        <div className='bg-rose-200 pt-30 pb-20 py-16 px-6'>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-red-700 mb-4">One Donation Can Save Three Lives</h2>
                        <p className="text-gray-600 mb-6">Blood donation is a simple act of kindness that can save lives during emergencies, surgeries, and critical treatments. Be a hero today with LifeDrop.</p>

                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-6 rounded-xl text-center shadow-2xl">
                            <h3 className="text-3xl font-bold text-red-700">3+</h3>
                            <p className="text-gray-600">Lives Saved</p>
                        </div>

                        <div className="bg-rose-50 p-6 rounded-xl text-center shadow-2xl">
                            <h3 className="text-3xl font-bold text-red-700"> {roleDonor.length} </h3>
                            <p className="text-gray-600">Active Donors</p>
                        </div>

                        <div className="bg-rose-50 p-6 rounded-xl text-center shadow-2xl">
                            <h3 className="text-3xl font-bold text-red-700"> {requestDone.length} </h3>
                            <p className="text-gray-600">Requests Fulfilled</p>
                        </div>

                        <div className="bg-rose-50 p-6 rounded-xl text-center shadow-2xl">
                            <h3 className="text-3xl font-bold text-red-700">24/7</h3>
                            <p className="text-gray-600">Emergency Support</p>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Featured;