import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/profile.JPG";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-violet-500 rounded-[2rem] rotate-6 opacity-20 blur-lg animate-pulse" />
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-primary-500">Me</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-violet-600 dark:text-violet-400">
              Android (Java) Developer & PHP Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Hi! I'm Tirth, a passionate developer who loves turning complex problems into simple, beautiful, and intuitive designs.
              My job is to build your website so that it is functional and user-friendly but at the same time attractive.
              Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition shadow-lg shadow-primary-500/30"
              >
                Let's Talk
              </a>
              <div className="flex items-center gap-4 px-6">
                <a
                  href="https://github.com/TirthBhayani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition transform hover:scale-110"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tirth-bhayani-9667a725a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition transform hover:scale-110"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
