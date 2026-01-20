import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { AuthContext } from '../../Authentication/Auth/AuthContext';
import DonorCharts from './DonorCharts';

const DonorOverviewCards = () => {

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/donor-overview?email=${user.email}`)
      .then(res => setStats(res.data))
      .catch(err => console.error(err));

  }, [user?.email, axiosSecure]);

  if (!stats) {
    return <p className="text-center mt-10"><span className="loading loading-dots loading-xl"></span></p>;
  }

  return (
    
    <div className='mb-20'>
    <p className="text-2xl font-bold text-center pt-10 text-base-content">Blood Donation Activity</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">

      <div className="bg-white shadow rounded-xl p-6 text-center">
        <h3 className="text-gray-500">Total Requests</h3>
        <p className="text-4xl font-bold text-blue-600">
          {stats.totalRequests}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-6 text-center">
        <h3 className="text-gray-500">Completed</h3>
        <p className="text-4xl font-bold text-green-600">
          {stats.completed}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-6 text-center">
        <h3 className="text-gray-500">Pending</h3>
        <p className="text-4xl font-bold text-orange-500">
          {stats.pending}
        </p>
      </div>

    </div>

    <DonorCharts stats={stats}></DonorCharts>
    </div>
  );
};

export default DonorOverviewCards;
