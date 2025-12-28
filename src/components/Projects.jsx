import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "AI Trip Planner",
    image: project1,
    description: "An AI-powered Android app to plan trips efficiently, suggesting destinations and routes.",
    tags: ["Android", "Kotlin", "AI"],
    link: "https://github.com/TirthBhayani/AiBaseTrip",
  },
  {
    title: "Hostel Management",
    image: project2,
    description: "A web-based system for managing rooms, students, and allocations with an admin dashboard.",
    tags: ["PHP", "MySQL", "Web"],
    link: "https://github.com/TirthBhayani/hostel-manage",
  },
  {
    title: "Fake News Detector",
    image: project3,
    description: "A Python/ML app that detects and flags fake news articles to verify authenticity.",
    tags: ["Python", "ML", "Flask"],
    link: "https://github.com/TirthBhayani/Fake_News_Detector",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in mobile and web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <HiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
