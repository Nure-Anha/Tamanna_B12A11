import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../CustomHooks/useAxios';
import { AuthContext } from './Authentication/Auth/AuthContext';

const Fundings = () => {

    const {user} = useContext(AuthContext) ;
    const axiosInstance = useAxios() ;


    const handleDonateAmount = (e) => {
        e.preventDefault() ;

        const donateAmount = e.target.donateamount.value ;
        console.log(donateAmount) ;
        const donorName = user?.displayName ;
        console.log(donorName) ;
        const donateEmail = user?.email ;
        console.log(donateEmail) ;


        const donateData = {
            Donate_Amount:donateAmount ,
            Donor_Name: donorName ,
            Donate_Email: donateEmail ,

        }

        axiosInstance.post("/payment" , donateData) 
        .then(res => {
            console.log('donate amount :' , res.data) ;
            window.location.href = res.data.url ;
        })

    }

    // all funfings table
    const [allFundings, setallFundings] = useState([]);
    useEffect(() => {
        axiosInstance.get('/all-fundings')
        .then(res => {
            setallFundings(res.data)
            console.log(res.data) ;
        });
    }, [axiosInstance]);
    console.log("allFundings" , allFundings) ;



    return (
        <div  className=' bg-[#f1f6fa] p-10'>
            <title>Fundings</title>

            <h2 className="text-4xl font-bold text-center mb-10">All Funding History</h2>

                <div className="flex justify-end mb-4">
                    <form onSubmit={handleDonateAmount} className='flex ml-260'>
                        <input name='donateamount' type="text" placeholder="Donate Amount" className="input" />
                        <button className='btn bg-fuchsia-800 text-white'>Give Fund</button>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <table className="table pl-20 font-semibold mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Donor Name</th>
                                <th>Fund Amount</th>
                                <th>Funding Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allFundings.map((s,index) => <tr className="bg-base-200">
                                <th>{index+1}</th>
                                <td> {s?.donorName} </td>
                                <td>{s?.amount}</td>
                                <td> {s?.paidAt} </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default Fundings;