import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
   // handleGoBackBtn functionality 
const navigte = useNavigate() ;
const handleGoBackBtn = () => {
    navigte("/") ;
}

    return (
        <div className='bg-[#f1f6fa] pb-50'>
            <img className='mx-auto pt-20 mb-10 w-50' src="/myAssets/error-404.png" alt="error png" />
            <p className='text-[#001931] font-semibold text-5xl text-center '>Sorry, page not found!</p>
            <p className='text-[#627382] text-xl font-normal mt-5 text-center'>The page you are looking for is not available.</p>

            <button onClick={handleGoBackBtn} className='btn bg-linear-to-r from-red-400 to-rose-700 text-white p-2.5 rounded-lg w-[145px] h-12 font-semibold text-[16px] mt-10 mx-auto block border-0' >Go Back!</button>
        </div>
    );
};

export default ErrorPage;