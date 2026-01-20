import React, { useState } from "react";

const testimonials = [
  { name: "Rahim Ahmed", role: "Donor", message: "LifeDrop made donating blood easy and safe."},
  { name: "Mina Akter", role: "Recipient", message: "I got blood on time during an emergency. Forever grateful!"},
  { name: "Sabbir Hossain", role: "Volunteer", message: "Volunteering through LifeDrop is smooth and secure."},
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section className="py-20 bg-rose-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Testimonials</h2>
        <div className="relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full">◀</button>
          <div className="bg-base-100 p-10 rounded-xl shadow-md">
            
            <p className="text-gray-700 mb-2">"{testimonials[index].message}"</p>
            <h3 className="font-semibold">{testimonials[index].name}</h3>
            <p className="text-red-600">{testimonials[index].role}</p>
          </div>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full">▶</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
