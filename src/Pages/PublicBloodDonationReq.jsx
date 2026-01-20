import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../CustomHooks/useAxios";

const PublicBloodDonationReq = () => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    axiosInstance.get("/public-blood-donation-requests").then((res) => {
      setRequests(res.data);
    });
  }, [axiosInstance]);

  const handleViewBtn = (id) => {
    navigate(`/blood-donation-request-details/${id}`);
  };

 
  const districts = [
    ...new Set(requests.map((r) => r.Recipient_District)),
  ];


  const filteredRequests = requests.filter((r) => {
    const matchesName = r.Recipient_Name.toLowerCase().includes(
      searchText.toLowerCase()
    );

    const matchesDistrict = selectedDistrict
      ? r.Recipient_District === selectedDistrict
      : true;

    return matchesName && matchesDistrict;
  });

  return (
    <div className="p-20 bg-[#f1f6fa] text-black">
      <title>Blood Donation Requests</title>

      <h2 className="text-4xl font-bold text-center mb-10">
        All Blood Donation Requests
      </h2>

     
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
        {/* Search by Recipient Name */}
        <input
          type="text"
          placeholder="Search by recipient name"
          className="input input-bordered w-full md:w-1/2 text-base-content"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Filter by District */}
        <select
          className="select select-bordered w-full md:w-1/3 text-base-content"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value="">All Locations</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-2xl rounded-lg">
        <table className="table">
          <thead className="bg-red-100 text-red-700">
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((r, index) => (
                <tr key={r._id}>
                  <td>{index + 1}</td>
                  <td>{r.Recipient_Name}</td>
                  <td>
                    {r.Recipient_District}, {r.Recipient_Upazilla}
                  </td>
                  <td>
                    <span className="badge bg-red-600 text-white">
                      {r.Blood_Group}
                    </span>
                  </td>
                  <td>{r.Donation_Date}</td>
                  <td>{r.Donation_Time}</td>
                  <td>
                    <button
                      onClick={() => handleViewBtn(r._id)}
                      className="btn btn-sm bg-rose-600 text-white hover:bg-red-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No matching donation requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicBloodDonationReq;
