import React from "react";

const TermsPolicy = () => {
  return (
    <div className="max-w-8xl mx-auto px-20 py-20 bg-white">
      {/* Page Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-red-600 mb-8 text-center">
        Terms & Policy
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to LifeDrop! By accessing or using our platform, you agree to comply 
          with our terms of service and privacy policies. These terms ensure a safe 
          and reliable blood donation experience for both donors and recipients.
        </p>
      </section>

      {/* Terms of Service */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">1. Terms of Service</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
          <li>All users must register with accurate and valid information.</li>
          <li>Users are responsible for maintaining the confidentiality of their account.</li>
          <li>LifeDrop reserves the right to suspend or terminate accounts violating policies.</li>
          <li>Blood donation requests should be genuine and follow all medical guidelines.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">2. Privacy Policy</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
          <li>We respect your privacy and will not share your personal information without consent.</li>
          <li>Data collected includes registration info, donation history, and contact details.</li>
          <li>All payment and personal information is encrypted and securely stored.</li>
          <li>Users can request deletion or modification of their data anytime.</li>
        </ul>
      </section>

      {/* User Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">3. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Donors should only donate if they meet eligibility criteria.</li>
          <li>Recipients should provide accurate medical details for blood requests.</li>
          <li>Users must not post false or misleading information on the platform.</li>
          <li>Compliance with all local laws regarding blood donation is mandatory.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">4. Disclaimer</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          LifeDrop is a facilitator and connector platform. We do not provide medical 
          services or assume responsibility for any medical outcomes. Always follow 
          hospital guidelines and consult certified medical professionals for critical situations.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">5. Contact Us</h2>
        <p className="text-gray-700 text-lg">
          For any questions about our terms and policies, please contact us at:{" "}
          <a href="mailto:support@lifedrop.com" className="text-red-600 hover:underline">
            nureanha99@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsPolicy;