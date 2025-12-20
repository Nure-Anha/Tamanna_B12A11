import React from 'react';

const Featured = () => {
    return (
        <div>
            <section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-4xl font-bold text-red-700 mb-4">
        One Donation Can Save Three Lives
      </h2>

      <p className="text-gray-600 mb-6">
        Blood donation is a simple act of kindness that can save lives during
        emergencies, surgeries, and critical treatments. Be a hero today with LifeDrop.
      </p>

      <div className="flex gap-4">
        <button className="btn bg-red-600 hover:bg-red-700 text-white">
          Become a Donor
        </button>
        <button className="btn btn-outline border-red-600 text-red-600">
          Search Requests
        </button>
      </div>
    </div>

    {/* Right Cards */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-rose-50 p-6 rounded-lg text-center">
        <h3 className="text-3xl font-bold text-red-700">3+</h3>
        <p className="text-gray-600">Lives Saved</p>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg text-center">
        <h3 className="text-3xl font-bold text-red-700">500+</h3>
        <p className="text-gray-600">Active Donors</p>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg text-center">
        <h3 className="text-3xl font-bold text-red-700">120+</h3>
        <p className="text-gray-600">Requests Fulfilled</p>
      </div>

      <div className="bg-rose-50 p-6 rounded-lg text-center">
        <h3 className="text-3xl font-bold text-red-700">24/7</h3>
        <p className="text-gray-600">Emergency Support</p>
      </div>
    </div>

  </div>
</section>

        </div>
    );
};

export default Featured;