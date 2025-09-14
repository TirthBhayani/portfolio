export default function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 to-pink-500">
        <h1 className="text-6xl font-bold mb-4">Hi, I'm Tirth 👋</h1>
        <p className="text-xl mb-6">A Passionate Web Developer & Designer</p>
        <div>
          <a href="#projects" className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow hover:bg-purple-200 transition">
            View My Work
          </a>
          <a href="#contact" className="ml-4 px-6 py-3 bg-purple-800 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  