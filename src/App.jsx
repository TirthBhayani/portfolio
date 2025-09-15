import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import ContactSection from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
