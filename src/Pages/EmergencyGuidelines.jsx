import React from "react";

const guidelines = [
  {
    title: "Call Emergency Services",
    description:
      "If the patient is in critical condition, immediately contact emergency medical services or go to the nearest hospital.",
    icon: "/myAssets/siren.png",
  },
  {
    title: "Check Blood Group",
    description:
      "Confirm the required blood group and quantity before requesting or donating blood to avoid delays.",
    icon: "/myAssets/blood-drop.png",
  },
  {
    title: "Do Not Delay Donation",
    description:
      "In emergency situations, timely blood donation can save lives. Act as fast as possible.",
    icon: "/myAssets/stop-watch.png",
  },
  {
    title: "Ensure Donor Safety",
    description:
      "Donors should be healthy, hydrated, and meet basic donation criteria to avoid complications.",
    icon: "/myAssets/encrypted.png",
  },
  {
    title: "Carry Proper Documents",
    description:
      "Bring a valid ID and any hospital-related documents during emergency blood donation.",
    icon: "/myAssets/checklist.png",
  },
  {
    title: "Follow Medical Instructions",
    description:
      "Always follow hospital staff instructions before, during, and after blood donation.",
    icon: "/myAssets/doctor.png",
  },
];

const EmergencyGuidelines = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">


        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-600">
            Emergency Guidelines
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            In emergency situations, following proper guidelines can help
            save lives and ensure safe blood donation for both donors and
            patients.
          </p>
        </div>

       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
            
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EmergencyGuidelines;
