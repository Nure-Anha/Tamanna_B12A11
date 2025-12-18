import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import { useNavigate, useParams } from 'react-router';

const EditDonationReq = () => {

     const axiosSecure = useAxiosSecure() ;
     const {user} = useContext(AuthContext) ;
     
     

    // District and Upazilla data load
    const [districtData , setDistrictData] = useState([]) ;
    const [upazillaData , setUpazillaData] = useState([]) ;
    useEffect(()=>{
    fetch("/myAssets/Data/districts.json")
    .then(res => res.json()) 
    .then(data => {
        console.log("Fetched data of District.json: ", data[2]?.data) ;
        setDistrictData(data[2]?.data) ;
    })
    fetch("/myAssets/Data/upazilas.json")
    .then(res => res.json()) 
    .then(data2 => {
        console.log("Fetched data of Upazilla.json: ", data2[2]?.data) ;
        setUpazillaData(data2[2]?.data) ;
    })
    } , [])




    // handleSelectDistrict
        const [selected_District , setSelected_District] = useState('') ;
        const handleSelectDistrict = (e) => {
            setSelected_District(e.target.value) ;
        }
        console.log("selected_District : ", selected_District) ;

        // handleSelectUpazilla
        const [seleted_Upazilla , setSeleted_Upazilla] = useState('') ;
        const handleSelectUpazilla = (e) => {
            setSeleted_Upazilla(e.target.value) ;
        }
        console.log("seleted_Upazilla : ", seleted_Upazilla) ;


    
    // get id by dynamically when click edit for specifc req
    const getId = useParams() ;
    console.log(getId) ;
    const id = getId.id ;
    console.log(id) ;
    // get values from created donation database
    const [getValues , setGetValues] = useState({}) ;
    useEffect(()=> {
        axiosSecure.get(`/edit-donation-request/${id}`)
        .then(res => setGetValues(res.data))
    } , [axiosSecure , id])
    console.log("getValues" , getValues) ;
    

    const navigate = useNavigate() ;

   // handleRequest
    const handleRequest = (e) => {
    e.preventDefault() ;

    const reqname = e.target.reqname.value ;
    console.log(reqname) ;
    const reqemail = e.target.reqemail.value ;
    console.log(reqemail) ;
    const recname = e.target.recname.value ;
    console.log(recname) ;
    const hospitalname = e.target.hospitalname.value ;
    console.log(hospitalname) ;
    const fulladdress = e.target.fulladdress.value ;
    console.log(fulladdress) ;
    const donationdate = e.target.donationdate.value ;
    console.log(donationdate) ;
    const bloodgroup = e.target.bloodgroup.value ;
    console.log(bloodgroup) ;
    const donationtime = e.target.donationtime.value ;
    console.log(donationtime) ;
    const requestermessage = e.target.requestermessage.value ;
    console.log(requestermessage) ;

    e.target.reset() ;

    // edit donation req
    const editDonationReqData = {
        Requester_Name: reqname ,
        Requester_Email: reqemail ,
        Recipient_Name: recname ,
        Recipient_District : selected_District || getValues?.Recipient_District ,
        Recipient_Upazilla : seleted_Upazilla || getValues?.Recipient_Upazilla ,
        Hospital_Name: hospitalname ,
        Full_Address: fulladdress ,
        Blood_Group: bloodgroup ,
        Donation_Date: donationdate ,
        Donation_Time: donationtime ,
        Requester_Message: requestermessage
    }
    axiosSecure.patch(`/edit-donation-request/${id}`, editDonationReqData)
    .then(res => {
        console.log('Edited Donation Request Data :', res.data) ;
        alert("Donation Request is Updated successfully");
        navigate("/dashboard/my-donation-requests");
    })
    .catch(err => {
        console.log('error occured for updating Donation req data to backend:' , err.message) ;
    })

}
   


    return (
        <div>
            <title>Donor - Edit Donation Request</title>

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col bg-white p-10 rounded-2xl shadow-xl">
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold mb-5 dark:text-black">Edit Your Donation Request</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleRequest}>
                                    <fieldset className="fieldset">

                                        <label className="label">Requester name</label>
                                        <input type="text" name='reqname' className="input" defaultValue={user?.displayName} readOnly />

                                        <label className="label">Requester Email</label>
                                        <input type="email" name='reqemail' className="input" defaultValue={user?.email} readOnly />

                                        <label className="label">Recipient name</label>
                                        <input type="text" name='recname' className="input" defaultValue={getValues?.Recipient_Name} />

                                        <label className='label'>Recipient District</label>
                                        <select onChange={handleSelectDistrict}  className="select">
                                             <option value={getValues?.Recipient_District}>{getValues?.Recipient_District}</option>
                                             {
                                                districtData.map(i => <option key={i?.id}>{i?.bn_name} </option>)
                                             }
                                        </select>

                                        <label className='label'>Recipient Upazila</label>
                                        <select onChange={handleSelectUpazilla} className="select">
                                             <option value={getValues?.Recipient_Upazilla}>{getValues?.Recipient_Upazilla}</option>
                                             {
                                                upazillaData.map(j => <option key={j?.id}>{j?.bn_name} </option>)
                                             }
                                        </select>

                                        <label className="label">Hospital name</label>
                                        <input type="text" name='hospitalname' className="input" defaultValue={getValues?.Hospital_Name} />
                                        
                                        <label className="label">Full Address</label>
                                        <input type="text" name='fulladdress' className="input" defaultValue={getValues?.Full_Address} />

                                        <label className='label'>Blood Group</label>
                                        <select name='bloodgroup' defaultValue="Select a Blood Group" className="select">
                                             <option value={getValues?.Blood_Group}>{getValues?.Blood_Group}</option>
                                             <option value="A+">A+</option>
                                             <option value="A-">A-</option>
                                             <option value="B+">B+</option>
                                             <option value="B-">B-</option>
                                             <option value="AB+">AB+</option>
                                             <option value="AB-">AB-</option>
                                             <option value="O+">O+</option>
                                             <option value="O-">O-</option>
                                        </select>

                                        <label className="label">Donation Date</label>
                                        <input defaultValue={getValues?.Donation_Date} type="date" name="donationdate" className="input"/>

                                        <label className="label">Donation Time</label>
                                        <input defaultValue={getValues?.Donation_Time} type="time" name="donationtime" className="input"/>


                                        <label className='label'>Requester Message</label>
                                        <input defaultValue={getValues?.Requester_Message} type="text" name='requestermessage' className="input" />
                                        
                                        <button className="btn btn-neutral mt-4">Update Donation Request</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default EditDonationReq;