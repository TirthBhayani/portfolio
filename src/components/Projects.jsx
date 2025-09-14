import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "AI Based Trip Planner (Android)",
    image: project1,
    description:
      "An AI-powered Android app to plan trips efficiently, suggesting destinations, routes, and itineraries based on user preferences.",
    link: "https://github.com/TirthBhayani/AiBaseTrip",
  },
  {
    title: "Hostel Management System (PHP)",
    image: project2,
    description:
      "A web-based hostel management system built with PHP for managing rooms, students, and allocations with an admin dashboard.",
    link: "https://github.com/TirthBhayani/hostel-manage",
  },
  {
    title: "Fake News Detector (Python)",
    image: project3,
    description:
      "An Web app that uses machine learning to detect and flag fake news articles, helping users verify news authenticity.",
    link: "https://github.com/TirthBhayani/Fake_News_Detector",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-100"
    >
      <h2 className="text-3xl font-bold text-center text-blue-300 dark:text-blue-700 mb-10">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 dark:bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-200 dark:text-blue-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-700 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-blue-400 dark:text-blue-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
