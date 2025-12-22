import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';
import useAxios from '../../CustomHooks/useAxios';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Authentication/Auth/FireBase.config';
import Swal from 'sweetalert2';

const DashProfile = () => {

    const {user} = useContext(AuthContext) ;
    const axiosInstance = useAxios() ;

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

            // handleSelectedBloodGroup
            const [selectedBloodGroup, setSelected_BloodGroup] = useState('');
            const handleSelectedBloodGroup = (e) => {
                setSelected_BloodGroup(e.target.value) ;
            }


        // get profile data
        const [profile , setProfile] = useState(null) 
        useEffect(()=>{
            axiosInstance.get(`/profile/${user?.email}`)
            .then(res => {
                console.log(res.data) ;
                setProfile(res.data) ;
                setSelected_District(res.data?.Recipient_District || '');
                setSeleted_Upazilla(res.data?.Recipient_Upazilla || '');
                setSelected_BloodGroup(res.data?.Blood_Group || '');
                
            })
        },[axiosInstance , user?.email])
            console.log(profile)

        // useEffect(() => {
        // if (profile) {
        //     setSelected_District(profile?.Recipient_District || '');
        //     setSeleted_Upazilla(profile?.Recipient_Upazilla || '');
        //     setSelectedBloodGroup(profile?.Blood_Group || '');
        // }
        // }, [profile]);


        // edit and save btn
        const [edit , setEdit] = useState(false) ; 
        const handleEditBtn = () => {
            setEdit(true) ;
            console.log(edit);  
        }
        // const handleSaveBtn = () => {
        //     setEdit(false) ;
        //     console.log(edit);  
        // }


        // handleUpdate
        const handleUpdate = async(e) => {
            e.preventDefault();

            const name = e.target.name.value ;
            console.log(name);
            const email = profile?.Email ;
            console.log(email);
            // img upload from pc
            // const photo = e.target.photo ;
            // console.log("photo" , photo) ;
            // const filePhoto = photo.files[0] ; // img er full description chole ashe
            // console.log("filePhoto" , filePhoto) ;
            //  // PC thk img niye ta imgbb link e convert kora
            // const res = await axiosInstance.post(`https://api.imgbb.com/1/upload?key=bb7d2c13e6be6d9365db73eb09c46b40`, {image:filePhoto}, {headers:{'Content-Type': 'multipart/form-data'}}) 
            // console.log( "resData" , res.data) ;
            // console.log( "displayURL" , res.data.data.display_url) ;
            // const updatedPhoto = res.data.data.display_url ;
            let updatedPhoto = profile?.Photo_URL;
            if (e.target.photo.files.length > 0) {
            const filePhoto = e.target.photo.files[0];
            const formData = new FormData();
            formData.append("image", filePhoto);
            const res = await axiosInstance.post(`https://api.imgbb.com/1/upload?key=bb7d2c13e6be6d9365db73eb09c46b40`,
                formData);

            updatedPhoto = res.data.data.display_url;
            }




            // firebase user update
            updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: updatedPhoto
            });



            // modify backend data = send update to backend by pach
            const profileUpdateData = {
                Updated_Name:name ,
                Email:email ,
                Updated_Photo_URL:updatedPhoto ,
                Updated_Blood_Group:selectedBloodGroup,
                Updated_Recipient_District: selected_District,
                Updated_Recipient_Upazilla: seleted_Upazilla 
            }

            await axiosInstance.patch('/profile-update' , profileUpdateData)
            .then(res => {
                console.log(res.data) ;
                Swal.fire({
                    title: "Good!",
                    text: "Your Profile Updated Successfully!",
                    icon: "success"
                    });
            })
           
            const updatedRes = await axiosInstance.get(`/profile/${profile?.Email}`);
            setProfile(updatedRes.data);
            setEdit(false);

            
        }



    return (
        <div className='p-10'>
            <title>Profile</title>
                        <div className='ml-90'>
                            <img className='w-20 rounded-full object-cover ml-23' src={profile?.Photo_URL} alt="" />
                            <h1 className="text-4xl font-bold mb-5 ml-10 ">Your Profile</h1>
                        </div>
                        
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        {
                            
                            !edit && <button onClick={handleEditBtn} className="btn ml-33 w-20 bg-red-600 text-white mt-4">Edit</button> 
                            
                        }
                        <form onSubmit={handleUpdate}>
                            <fieldset className="fieldset">
                                
                                        <label className="label">Name</label>
                                        <input type="text" name='name' className="input" defaultValue={profile?.Name} disabled={!edit} />

                                        <label className="label">Email</label>
                                        <input type="email" name='email' className="input" value={profile?.Email} readOnly />
                                        
                                        <label className="label">Photo</label>
                                        <input type="file" name='photo' className="input" disabled={!edit} />

                                        <label className='label'>Blood Group</label>
                                        <select onChange={handleSelectedBloodGroup} name='bloodGroup' value={selectedBloodGroup} disabled={!edit}  className="select">
                                             <option disabled={true}>Select a Blood Group</option>
                                             <option value="A+">A+</option>
                                             <option value="A-">A-</option>
                                             <option value="B+">B+</option>
                                             <option value="B-">B-</option>
                                             <option value="AB+">AB+</option>
                                             <option value="AB-">AB-</option>
                                             <option value="O+">O+</option>
                                             <option value="O-">O-</option>
                                        </select>

                                        <label className='label'>District</label>
                                        <select onChange={handleSelectDistrict} disabled={!edit} value={selected_District}  className="select">
                                             <option disabled={true}>Select a District</option>
                                             {
                                                districtData.map(i => <option key={i?.id} value={i?.name}>{i?.name} </option>)
                                             }
                                        </select>

                                        <label className='label'>Upazila</label>
                                        <select onChange={handleSelectUpazilla} disabled={!edit} value={seleted_Upazilla} className="select">
                                             <option disabled={true}>Select an Upazila</option>
                                             {
                                                upazillaData.map(j => <option key={j?.id} value={j?.name}>{j?.name} </option>)
                                             }
                                        </select>
                            </fieldset>
                             {
                               edit && <button type='submit'  className="btn ml-33 w-20 bg-rose-400  mt-4">Save</button>
                             }
                        </form>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default DashProfile;