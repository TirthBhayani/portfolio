import React, { useState } from "react";

const testimonials = [
  {
    name: "Sarah Lee",
    role: "Project Manager, TravelAI",
    text: "Tirth's AI Trip Planner app made our vacation planning effortless and fun. Highly recommended for innovative Android solutions!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Hostel Admin, UniHostels",
    text: "The Hostel Management System by Tirth Bhayani streamlined our operations and improved our workflow. Great PHP developer!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "Tech Blogger",
    text: "Tirth's Fake News Detector app is a must-have for news readers. Impressive use of machine learning on Android.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
        Testimonials
      </h2>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl text-center">
          <img
            src={testimonials[index].avatar}
            alt={testimonials[index].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-400 object-cover"
          />
          <p className="text-lg text-gray-200 mb-4">
            &ldquo;{testimonials[index].text}&rdquo;
          </p>
          <div className="font-semibold text-blue-200">
            {testimonials[index].name}
          </div>
          <div className="text-blue-100 text-sm">
            {testimonials[index].role}
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
