import React from "react";

const services = [
  { title: "Blood Request Management", icon: "/myAssets/blood-drop.png" },
  { title: "Donor Matching", icon: "/myAssets/blood-drop.png" },
  { title: "Funding Support", icon: "/myAssets/blood-drop.png" },
  { title: "Verified Users", icon: "/myAssets/blood-drop.png" },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-red-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Our Services</h2>
          <p className="text-gray-700 text-lg">
            LifeDrop offers multiple services that make blood donation safe,
            fast, and reliable. From managing requests to verifying donors, we
            ensure smooth operations.
          </p>
        </div>

        {/* Right Icons */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {services.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.icon} alt={item.title} className="w-5 h-5" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
