import React from "react";

const posts = [
  {
    title: "How to Build a Modern Portfolio with React",
    date: "2024-05-01",
    excerpt:
      "A step-by-step guide to creating a stunning portfolio website using React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "UI/UX Tips for Developers",
    date: "2024-04-15",
    excerpt:
      "Improve your web apps with these essential UI/UX design principles and best practices.",
    link: "#",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
        Blog
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-200 mb-2">
              {post.title}
            </h3>
            <div className="text-blue-100 text-sm mb-2">{post.date}</div>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-blue-400 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
