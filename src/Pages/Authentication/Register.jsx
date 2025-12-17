import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { auth } from './Auth/FireBase.config';
import { updateProfile } from 'firebase/auth';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';

const Register = () => {

    const {regWithEmailPass} = useContext(AuthContext) ;
    // central Localhost 3000 of backend
    const axiosSecure = useAxiosSecure() ;
    

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



    // ConfirmPass
    const [confirm_Pass , setConfirm_Pass] = useState('') ;



    // handleRegister
    const handleRegister = async(e) => {
        e.preventDefault() ;

        const email = e.target.email.value ;
        console.log("email" , email) ;
        const name = e.target.name.value ;
        console.log("name" , name) ;

        // img upload from pc
        const photo = e.target.photo ;
        console.log("photo" , photo) ;
        const filePhoto = photo.files[0] ; // img er full description chole ashe
        console.log("filePhoto" , filePhoto) ;

        const pass = e.target.pass.value ;
        console.log("pass" , pass) ;
        const confirmpass = e.target.confirmpass.value ;
        console.log("confirmpass" , confirmpass) ;
        if(confirmpass !== pass) {
            setConfirm_Pass('Password and Confirm Password must be the same!') ;
            return ;
        }
        setConfirm_Pass('');


        // PC thk img niye ta imgbb link e convert kora
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=bb7d2c13e6be6d9365db73eb09c46b40`, {image:filePhoto}, {headers:{'Content-Type': 'multipart/form-data'}}) 
        console.log( "resData" , res.data) ;
        console.log( "displayURL" , res.data.data.display_url) ;
        const mainPhotoURL = res.data.data.display_url ;


        // firebase e email/google users jeabe save hy now database eo save korte hbe register complete howar shathe sthe
        const formData = {
            Email: email ,
            Name: name ,
            Password: pass ,
            Photo_URL: mainPhotoURL
        }


        e.target.reset() ;
        // regWithEmailPass
        if(res.data.success == true) {  // jodi image dye thake then.....
            regWithEmailPass (email , pass)
            .then(res => {
                console.log("New Register:" , res.user) ;
                    updateProfile(auth.currentUser, {
                    displayName: name, photoURL: mainPhotoURL
                    }).then(() => {
                    // Profile updated!

                    // registered user data post into db*******************************
                    axiosSecure.post("/users" , formData) 
                    .then(res => {
                        console.log("Posted Registred Users Data to DB :" , res.data) ;
                    })
                    .catch(errRegUserData => {
                        console.log("errRegUserData :" , errRegUserData.message) ;
                    })
                    // *****************************************************************
                    
                    }).catch((error) => {
                    // An error occurred
                    console.log("ErrorMassege" , error.message) ;
                    });
            })
            .catch((error) => {
                console.log("ErrorMassege" , error.message) ;
            }); 
        }

    }



    return (
        <div className=' bg-[#f1f6fa] p-10'>
            <title>Register</title>
            

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse bg-white p-10 rounded-2xl shadow-xl">
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold mb-5 dark:text-black">Register Now!</h1>
                        <p className='text-gray-500'><span className='font-bold text-lg text-red-600'>LifeDrop - a Blood Donation Application</span> <br />which aims to create a user-friendly platform that <br /> facilitates 
                        blood donation activities. <br /> The application will connect donors with those in need of 
                        blood, <br /> promoting a seamless and efficient donation process. <br />  <br />
                        The application features for uses are : 
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc ml-5">
                                <li>Donor registration & management</li>
                                <li>Blood donation requests</li>
                                <li>Role-based access control</li>
                                <li>Secure & efficient process</li>
                            </ul> </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <fieldset className="fieldset">

                                        <label className="label">Email</label>
                                        <input type="email" name='email' className="input" placeholder="Your Email" />

                                        <label className="label">Name</label>
                                        <input type="text" name='name' className="input" placeholder="Enter Your Full Name" />
                                        <label className="label">Photo</label>
                                        <input type="file" name='photo' className="input" placeholder="Enter Your Photo" />

                                        <label className='label'>Blood Group</label>
                                        <select defaultValue="Select a Blood Group" className="select">
                                             <option disabled={true}>Select a Blood Group</option>
                                             <option value="">A+</option>
                                             <option value="">A-</option>
                                             <option value="">B+</option>
                                             <option value="">B-</option>
                                             <option value="">AB+</option>
                                             <option value="">AB-</option>
                                             <option value="">O+</option>
                                             <option value="">O-</option>
                                        </select>

                                        <label className='label'>District</label>
                                        <select onChange={handleSelectDistrict} defaultValue='Select a District'  className="select">
                                             <option disabled={true}>Select a District</option>
                                             {
                                                districtData.map(i => <option key={i?.id} value={i?.division_id}>{i?.bn_name} </option>)
                                             }
                                        </select>

                                        <label className='label'>Upazila</label>
                                        <select onChange={handleSelectUpazilla} defaultValue='Select an Upazila'  className="select">
                                             <option disabled={true}>Select an Upazila</option>
                                             {
                                                upazillaData.filter(k => k.district_id === selected_District).map(j => <option key={j?.id} value={j?.district_id}>{j?.bn_name} </option>)
                                             }
                                        </select>

                                        <label className="label">Password</label>
                                        <input type="password" name='pass' className='input' placeholder='Enter Your Password'/>

                                        <label className="label">Confirm Password</label>
                                        <input type="text" name='confirmpass' className="input" placeholder="Confirm Password" />
                                        {
                                            confirm_Pass && <p className="text-red-600 text-sm mt-1">{confirm_Pass}</p>
                                        }
                                        
                                        <button className="btn btn-neutral mt-4">Register</button>
                                    </fieldset>
                                </form>
                                <p className='text-md font-medium text-center'>Already have an account? <Link className='text-blue-600 font-bold' to={'/login'}>Login here </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Register;