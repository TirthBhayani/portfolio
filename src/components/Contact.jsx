import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiCheckCircle } from "react-icons/hi";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add real submission logic here if needed
    fetch("https://formspree.io/f/mblabnek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      // Handle success
    });
    console.log("User message:", form);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white dark:to-gray-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Contact Info Side */}
          <div className="bg-primary-600 p-10 md:w-1/3 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-violet-600/50 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <p className="text-primary-100 mb-8">
                Fill out the form or send me an email directly.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <HiMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-primary-200">Email</p>
                  <a href="mailto:tirthbhayani111@gmail.com" className="font-medium hover:text-white transition">
                    tirthbhayani111@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-2/3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <HiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:text-white"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:text-white"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all h-32 resize-none dark:text-white"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-primary-500/30 transition transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
