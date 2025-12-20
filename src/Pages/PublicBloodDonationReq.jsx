import React, {useEffect, useState } from 'react';
import useAxios from '../CustomHooks/UseAxios';

const PublicBloodDonationReq = () => {

    const axiosInstance = useAxios();


  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axiosInstance.get('/public-blood-donation-requests')
      .then(res => setRequests(res.data));
  }, [axiosInstance]);


    return (
        <div className="p-15 bg-[#f1f6fa]">
            <title>Blood Donation Requests</title>

            <h2 className="text-4xl font-bold text-center  text-red-700">All Pending Blood Donation Requests</h2>

                <div className="overflow-x-auto bg-white shadow-2xl rounded-lg mt-10">
                    <table className="table">
                        <thead className="bg-red-100 text-red-700">
                            <tr>
                            <th>#No</th>
                            <th>Recipient Name</th>
                            <th>Location</th>
                            <th>Blood Group</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                requests.map((r, index) => <tr key={r._id}>
                                    <td>{index + 1}</td>
                                    <td>{r.Recipient_Name}</td>
                                    <td>{r.Recipient_District}, {r.Recipient_Upazilla}</td>
                                    <td><span className="badge bg-red-600 text-white">{r.Blood_Group}</span>
                                    </td>
                                    <td>{r.Donation_Date}</td>
                                    <td>{r.Donation_Time}</td>
                                    <td>
                                        <button className="btn btn-sm bg-rose-400 text-white hover:bg-red-700">View</button>
                                    </td>
                            </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
    );
};

export default PublicBloodDonationReq;