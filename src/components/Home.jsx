import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-[60vh] text-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute top-10 left-10 w-40 h-40 bg-blue-700 opacity-20 rounded-full blur-2xl"></div>
        <div className="animate-pulse absolute bottom-10 right-10 w-40 h-40 bg-purple-700 opacity-20 rounded-full blur-2xl"></div>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
        Hi, I'm Tirth Bhayani
      </h1>
      <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl">
        Android Developer (Java) &amp; PHP Developer passionate about building
        robust mobile apps and scalable web solutions.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition text-lg"
      >
        View My Work
      </a>
    </section>
  );
}

export default Home;
