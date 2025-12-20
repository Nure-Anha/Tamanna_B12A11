import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication/Auth/AuthContext';
import useAxios from '../CustomHooks/UseAxios';
import { useParams } from 'react-router';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BloodDonationRequestDetailsPage = () => {

    const {user} = useContext(AuthContext) ;
    const axiosInstance = useAxios() ;

    const paramsID = useParams();
    console.log(paramsID) ;
    const id = paramsID.id ;
    console.log(id)

    const [details , setDetails] = useState('') ;
    useEffect(()=> {
        axiosInstance.get(`/pending-donation-request-details/${id}`)
        .then(res => {
            console.log( res.data) ;
            setDetails(res.data) ;
        });

    } , [axiosInstance , id])


    // handleDonateBloodBtn
    const handleDonateBloodBtn = () => {
        document.getElementById('my_modal_1').showModal() ;
    }

    // handleConfirmBtn
    const handleConfirmSubmit = (e) => {
        e.preventDefault() ;

        // const donorName = e.target.donorName.value ;
        // console.log('donorName' , donorName); 
        // const donorEmail = e.target.donorEmail.value ;
        // console.log('donorEmail' , donorEmail); 


        // update donation status
        axiosInstance.patch(`/pending-donation-request-details/${id}`)
        .then(res => {
            console.log(res.data) ;
            setDetails({...details , Donation_status: 'inprogress'}) ;
            document.getElementById('my_modal_1').close() ;
        })
        
    }


    return (
        <div className='p-10 bg-[#f1f6fa]'>
            <title>Blood Donation Request Details</title>
            <h3 className='text-4xl font-bold mb-20 text-center'>Blood Donation Request Details</h3>

            <div className="max-w-xl mx-auto bg-white border border-rose-200 rounded-xl shadow-md">
                <div className="p-8 space-y-4">

                    <div className={`badge px-8 py-4 font-semibold ml-95 mt-2 ${details?.Donation_status === 'pending' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>{details?.Donation_status}</div>

                    <h2 className="text-3xl font-bold text-red-700">{details?.Recipient_Name}</h2>

                    <div className="flex items-center gap-3"><img src="/myAssets/blood-drop.png" alt="" className="w-8"/>
                    <p className="text-2xl font-bold text-rose-600">{details?.Blood_Group}</p></div>

                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p><span className="font-semibold">District:</span><br />{details?.Recipient_District}</p>
                        <p><span className="font-semibold">Upazila:</span><br />{details?.Recipient_Upazilla}</p>
                        <p><span className="font-semibold">Hospital:</span><br/>{details?.Hospital_Name}</p>
                        <p><span className="font-semibold">Address:</span><br />{details?.Full_Address}</p>
                        <p><span className="font-semibold">Requester Name:</span><br />{details?.Requester_Name}</p>
                        <p><span className="font-semibold">Requester Email:</span><br />{details?.Requester_Email}</p>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                        <span><FontAwesomeIcon icon={faCalendar}/> {details?.Donation_Date}</span>
                        <span><FontAwesomeIcon icon={faClock}/> {details?.Donation_Time}</span>
                    </div>

                    <div className="bg-rose-50 p-3 rounded-md text-gray-700">
                        <span className="font-semibold text-red-700">Message:</span>
                        <p>{details?.Requester_Message}</p>
                    </div>

                    <button onClick={handleDonateBloodBtn} className="btn w-full bg-red-600 hover:bg-red-700 text-white mt-4">Donate Blood</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleConfirmSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Donor Name</label>
                                        <input type="text" name='donorName' className="input" value={user?.displayName} readOnly/>
                                        <label className="label">Donor Email</label>
                                        <input type="email" name='donorEmail' className="input" value={user?.email} readOnly />

                                        <button className="btn">Confirm</button>
                                    </fieldset>
                                </form>
                                
                                </div>
                        </dialog>


                </div>
            </div>

        </div>
    );
};

export default BloodDonationRequestDetailsPage;

/**Blood_Group
: 
"AB+"
Donation_Date
: 
"2025-12-18"
Donation_Time
: 
"20:15"
Donation_status
: 
"pending"
Full_Address
: 
"Shahabag , Dhaka"
Hospital_Name
: 
"Dhaka Medical"
Recipient_District
: 
"রাঙ্গামাটি"
Recipient_Name
: 
"Rishdin"
Recipient_Upazilla
: 
"মীরসরাই"
Requester_Email
: 
"nureanha99@gmail.com"
Requester_Message
: 
"An Emergency"
Requester_Name
: 
"Nure Anha" */