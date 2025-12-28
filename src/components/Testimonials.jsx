import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Client Testimonials</h2>

        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-24 h-24 rounded-full mb-6 border-4 border-primary-100 dark:border-primary-900 object-cover"
              />
              <p className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonials[index].name}</h4>
                <p className="text-primary-500">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-colors"
              aria-label="Previous"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-colors"
              aria-label="Next"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
