import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600">
            About LifeDrop
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            LifeDrop is a community-driven blood donation platform designed to
            connect donors with people in need, ensuring timely and life-saving
            support.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-red-600">Our Mission</h2>
              <p>
                Our mission is to make blood donation simple, transparent, and
                accessible for everyone by using modern technology and a
                trusted community network.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-red-600">Our Vision</h2>
              <p>
                We envision a world where no life is lost due to the lack of
                blood, and every donor can easily reach those in urgent need.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-base-200 rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                Connect Donors & Recipients
              </h3>
              <p className="text-sm text-gray-600">
                We bridge the gap between blood donors and patients in need.
              </p>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                Manage Donation Requests
              </h3>
              <p className="text-sm text-gray-600">
                Users can create, track, and manage blood donation requests.
              </p>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                Encourage Community Support
              </h3>
              <p className="text-sm text-gray-600">
                We promote voluntary blood donation and community awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-600">
            Together, we can save lives. Join LifeDrop and be a part of the
            change.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;