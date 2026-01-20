import React from "react";
import { Link } from "react-router";

const steps = [
  {
    step: "01",
    title: "Register",
    desc: "Create an account on LifeDrop using your email and basic information.",
    icon: "/myAssets/checklist.png",
  },
  {
    step: "02",
    title: "Create / View Requests",
    desc: "Request blood when needed or browse active donation requests nearby.",
    icon: "/myAssets/blood-drop.png",
  },
  {
    step: "03",
    title: "Donate Blood",
    desc: "Accept a request, donate blood, and help save a precious life.",
    icon: "/myAssets/heart.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-600">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            LifeDrop makes blood donation simple, transparent, and accessible
            for everyone. Follow these easy steps to make a difference.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">

          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-red-200 -z-10"></div>

          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-base-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-200 mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <span className="block text-red-600 font-bold text-lg">
                Step {item.step}
              </span>

              <h3 className="text-xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      
        <div className="text-center mt-14">
          <Link
            to="/become-donor"
            className="btn btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
