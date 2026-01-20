import React from "react";

const faqs = [
  { question: "Who can donate blood?", answer: "Any healthy individual aged 18-65, weighing above 50kg." },
  { question: "How do I request blood?", answer: "Register on LifeDrop and create a blood request." },
  { question: "Is it safe to donate blood?", answer: "Yes, all donations are supervised and screened." },
  { question: "Can I donate multiple times?", answer: "Yes, every 3 months for whole blood donation." },
];

const FAQ = () => (
  <section className="py-20 bg-white text-black">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <details key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} rounded-lg p-4 shadow`}>
            <summary className="font-semibold text-lg cursor-pointer">{item.question}</summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
