import React, { useEffect} from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxios from '../CustomHooks/useAxios';

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams() ;
    const sessionId = searchParams.get('session_id') ;

    const axiosInstance = useAxios() ;


    useEffect(()=>{
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
        .then(res => {
            console.log(res.data) ;
        })
    } , [axiosInstance , sessionId])



    return (
        <div className="p-20 flex flex-col items-center bg-[#f1f6fa] min-h-screen">
            <title>Payment Success</title>
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
                <p className="text-gray-700 mb-6">Thank you for your donation.</p>

                <Link to="/"><button className="btn bg-red-600 text-white mt-6 w-full">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;