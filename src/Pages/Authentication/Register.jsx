import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Auth/AuthContext';
import { auth } from './Auth/FireBase.config';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {regWithEmailPass} = useContext(AuthContext) ;

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
        // const confirmpass = e.target.confirmpass.value ;
        // console.log("confirmpass" , confirmpass) ;


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
                    axios.post("http://localhost:3000/users" , formData) 
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

                                        {/* <label className='label'>Blood Group</label>
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
                                        <select defaultValue="Select a District" className="select">
                                             <option disabled={true}>Select a District</option>
                                             <option value=""></option>
                                             <option value=""></option>
                                        </select>

                                        <label className='label'>Upazila</label>
                                        <select defaultValue="Select a Upazila" className="select">
                                             <option disabled={true}>Select a Upazila</option>
                                             <option value=""></option>
                                             <option value=""></option>
                                        </select> */}

                                        <label className="label">Password</label>
                                        <input type="password" name='pass' className='input' placeholder='Enter Your Password'/>

                                        {/* <label className="label">Confirm Password</label>
                                        <input type="text" name='confirmpass' className="input" placeholder="Confirm Password" /> */}
                                        
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