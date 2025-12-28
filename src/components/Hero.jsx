import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 mb-6">
            👋 Available for Freelance Projects
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-violet-600">
              Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm Tirth Bhayani, a passionate developer crafting beautiful, high-performance websites and web applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition flex items-center gap-2 group"
            >
              View Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
