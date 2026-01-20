import React from "react";

const trustSteps = [
  { step: 1, title: "Verified Users", desc: "All donors and recipients are verified.", icon: "/myAssets/encrypted.png" },
  { step: 2, title: "Secure Donations", desc: "Transactions are fully safe and encrypted.", icon: "/myAssets/mutual-funds.png" },
  { step: 3, title: "Admin Monitoring", desc: "Admins monitor requests to prevent misuse.", icon: "/myAssets/user.png" },
];

const SafetyTrust = () => (
  <section className="py-20 bg-base-200">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Safety & Trust</h2>
      <div className="relative border-l-2 border-red-600  pl-6">
        {trustSteps.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-7 top-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold ml-10 mb-1">{item.title}</h3>
            <p className="text-gray-700 ml-20">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SafetyTrust;
