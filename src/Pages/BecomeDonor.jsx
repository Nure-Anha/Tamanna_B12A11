import React from "react";
import { Link } from "react-router";

const BecomeDonor = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero with Gradient */}
      <div className="bg-linear-to-r from-rose-300 to-red-600 text-white py-30 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Become a Blood Donor
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
            Your small act of kindness can become someone’s second chance at
            life. Join LifeDrop and make a real impact today.
          </p>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          How Becoming a Donor Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Register", desc: "Create your LifeDrop account" },
            { step: "02", title: "Complete Profile", desc: "Add blood group & location" },
            { step: "03", title: "Accept Requests", desc: "Respond to blood requests" },
            { step: "04", title: "Save Lives", desc: "Help patients in need" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-base-200 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility as Checklist */}
      <div className="bg-base-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
            Are You Eligible?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Age 18 or above",
              "Good general health",
              "Minimum weight requirement",
              "Adequate time between donations",
            ].map((rule, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-base-100 p-5 rounded-lg shadow"
              >
                <span className="text-green-600 text-2xl">✔</span>
                <p className="text-gray-700">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Someone Needs You Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Blood cannot be manufactured. It can only come from generous donors
          like you. Take the first step now.
        </p>

        <Link
          to="/register"
          className="btn btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10"
        >
          Become a Donor Now
        </Link>
      </div>
    </div>
  );
};

export default BecomeDonor;
