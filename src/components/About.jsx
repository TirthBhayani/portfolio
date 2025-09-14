import React from "react";
import profilePhoto from "../assets/profile.JPG";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center py-16"
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      }}
    >
      <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-2xl w-full border border-gray-700">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-36 h-36 rounded-full shadow-lg mb-6 border-4 border-blue-400 object-cover transition-transform hover:scale-105"
        />
        <h1 className="text-4xl font-extrabold mb-2 text-blue-300 tracking-tight drop-shadow">
          Tirth Bhayani
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-blue-100">
          Android (Java) Developer &amp; PHP Developer
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mb-6">
          Hi! I'm Tirth, an enthusiastic Android developer specializing in Java
          and a skilled PHP developer. I have a strong passion for building
          robust mobile apps and dynamic web solutions. Let's collaborate to
          turn your ideas into reality!
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow transition mb-4"
        >
          Hire Me / Collaborate
        </a>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/TirthBhayani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* GitHub Icon */}
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-bhayani-9667a725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn Icon */}
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
