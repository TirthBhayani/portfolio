import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Option 1: Send via email using Formspree (or similar service)
    // Replace 'your-form-id' with your actual Formspree form ID
    fetch("https://formspree.io/f/mblabnek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      // Optionally handle success/failure
    });

    // Option 2: Store in Google Sheets using a Google Apps Script Web App
    // Uncomment and replace 'YOUR_SCRIPT_URL' with your deployed script URL
    /*
    fetch("YOUR_SCRIPT_URL", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    */

    // Save data to localStorage
    const messages = JSON.parse(
      localStorage.getItem("contactMessages") || "[]"
    );
    messages.push(form);
    localStorage.setItem("contactMessages", JSON.stringify(messages));
    // For debugging: show the user message in the console
    console.log("User message:", form);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
        Contact
      </h2>
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
        {submitted ? (
          <div className="text-center text-blue-200 text-xl font-semibold">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-gray-300">
          Or email me at{" "}
          <a
            href="mailto:tirthbhayani111@gmail.com"
            className="text-blue-400 hover:underline"
          >
            tirthbhayani111@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
