import React, { useEffect, useState } from 'react';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faHospital } from '@fortawesome/free-regular-svg-icons';
import useAxios from '../CustomHooks/useAxios';
import { useNavigate} from 'react-router';

const SearchPage = () => {

    // central Localhost 3000 of backend
    // const axiosSecure = useAxiosSecure() ;
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



    const [donorFound , setDonorFound] = useState([]) ;
    // handleSearchSubmit
    const handleSearchSubmit = (e) => {
        e.preventDefault() ;

        const bloodGroup = e.target.bloodGroup.value ;
        console.log('bloodGroup' , bloodGroup);



        axiosInstance.get(`/search?bloodGroup=${bloodGroup}&district=${selected_District}&upazilla=${seleted_Upazilla}`)
        .then(res => {
            console.log(res.data);
            setDonorFound(res.data) ;
            setSearchDone(true) ;
            
        })

        
    }

    const navigate = useNavigate() ;
    // handleViewBtn
    const handleViewBtn = (id) => {
        navigate(`/blood-donation-request-details/${id}`)
    }

    const [searchDone , setSearchDone] = useState(false) ;


    return (
        <div className='bg-[#f1f6fa] p-10'>
            <title>Search Page</title>
                <h3 className='text-4xl text-center font-bold mt-5 mb-15 text-black'>Search Donors</h3>
                        <form onSubmit={handleSearchSubmit}>
                            <fieldset className="fieldset flex justify-center flex-wrap">
                                <div>
                                    {/* <label className="label">Blood Group</label> */}
                                    <select name='bloodGroup' defaultValue='Select a Blood Group' className="select w-40 sm:w-48 md:w-56 lg:w-64">
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
                                </div>
                                <div>
                                    {/* <label className="label">District</label> */}
                                    <select onChange={handleSelectDistrict} defaultValue='Select a District'  className="select w-40 sm:w-48 md:w-56 lg:w-64">
                                             <option disabled={true}>Select a District</option>
                                             {
                                                districtData.map(i => <option key={i?.id} value={i?.name}>{i?.name} </option>)
                                             }
                                        </select>
                                </div>
                                <div>
                                    {/* <label className="label">Upazilla</label> */}
                                    <select onChange={handleSelectUpazilla} defaultValue='Select an Upazila'  className="select w-40 sm:w-48 md:w-56 lg:w-64">
                                             <option disabled={true}>Select an Upazila</option>
                                             {
                                                upazillaData.map(j => <option key={j?.id} value={j?.name} >{j?.name} </option>)
                                             }
                                        </select>
                                </div>

                                
                            </fieldset>
                            <div className="flex justify-center mt-4">
                                <button className="btn bg-red-600 text-white w-40 sm:w-48 md:w-56 lg:w-60">Search</button>
                            </div>
                        </form>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                        {
                            donorFound.length !== 0 ? donorFound.map(t => <div key={t?._id} className="card bg-white  shadow-md border border-rose-100 p-3">
                                <div className="card-body">
                                <div className="flex justify-between items-center">

                                    <span className="badge bg-red-200 text-sm px-3 py-2"><img className='w-5' src="/public/myAssets/blood-drop.png" alt="" /> {t?.Blood_Group}</span>

                                    <span className={`badge text-sm px-3 py-2 ${ t?.Donation_status === 'pending'
                                        ? 'bg-sky-400'
                                        : t?.Donation_status === 'inprogress'
                                        ? 'bg-yellow-400 text-black'
                                        : t?.Donation_status === 'cancelled'
                                        ? 'bg-red-700 text-white'
                                        : t?.Donation_status === 'done'
                                        ? 'bg-green-500 text-white'
                                        : ''
                                    }`}>{t?.Donation_status}</span>
                                </div>
                                <h2 className="card-title text-red-700 mt-3">{t?.Recipient_Name}</h2>

                                <p className="text-gray-600"><FontAwesomeIcon icon={faLocationCrosshairs} /> {t?.Recipient_District}, {t?.Recipient_Upazilla}</p>

                                <p className="text-gray-700"><FontAwesomeIcon icon={faHospital} /> <span className="font-medium">{t?.Hospital_Name}</span>
                                </p>

                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <span><FontAwesomeIcon icon={faCalendar}/> {t?.Donation_Date}</span><span><FontAwesomeIcon icon={faClock} /> {t?.Donation_Time}</span>
                                </div>

                                <div className="card-actions justify-end mt-4">
                                    <button onClick={()=>handleViewBtn(t?._id)} className="btn btn-sm bg-rose-600 text-white">View Details</button>
                                </div>
                                </div>
                            </div>) : searchDone ? <div className="col-span-full flex justify-center mt-10">
                                            <p className='text-blue-600 font-bold text-3xl text-center'>No Matched Request Found</p>
                                        </div> : null
                        }
                        </div>
                        </div>
    );
};

export default SearchPage;