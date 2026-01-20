import React from "react";

const bloodData = [
  {
    group: "O−",
    donateTo: "All blood groups",
    receiveFrom: "O− only",
    highlight: true,
  },
  {
    group: "O+",
    donateTo: "O+, A+, B+, AB+",
    receiveFrom: "O+, O−",
  },
  {
    group: "A−",
    donateTo: "A−, A+, AB−, AB+",
    receiveFrom: "A−, O−",
  },
  {
    group: "A+",
    donateTo: "A+, AB+",
    receiveFrom: "A+, A−, O+, O−",
  },
  {
    group: "B−",
    donateTo: "B−, B+, AB−, AB+",
    receiveFrom: "B−, O−",
  },
  {
    group: "B+",
    donateTo: "B+, AB+",
    receiveFrom: "B+, B−, O+, O−",
  },
  {
    group: "AB−",
    donateTo: "AB−, AB+",
    receiveFrom: "AB−, A−, B−, O−",
  },
  {
    group: "AB+",
    donateTo: "AB+ only",
    receiveFrom: "All blood groups",
    highlight: true,
  },
];

const BloodCompatibility = () => {
  return (
    <section className="py-10 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-600">
            Blood Group Compatibility
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Understanding blood compatibility is essential for safe and
            effective blood donation. This guide shows which blood groups
            can donate to and receive from others.
          </p>
        </div>

        {/* Compatibility Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloodData.map((item) => (
            <div
              key={item.group}
              className={`rounded-xl p-6 shadow-md border 
                ${item.highlight ? "border-red-500 bg-red-50" : "bg-base-200"}
              `}
            >
              <h3 className="text-3xl font-bold text-center text-red-600 mb-4">
                {item.group}
              </h3>

              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  <span className="font-semibold">Can Donate To:</span><br />
                  {item.donateTo}
                </p>
                <p>
                  <span className="font-semibold">Can Receive From:</span><br />
                  {item.receiveFrom}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            <span className="font-semibold text-red-600">Note:</span> O− is the
            universal donor, while AB+ is the universal recipient.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BloodCompatibility;