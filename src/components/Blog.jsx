import React from "react";
import { HiArrowRight } from "react-icons/hi";

const posts = [
  {
    title: "How to Build a Modern Portfolio",
    date: "2024-05-01",
    category: "Web Dev",
    excerpt: "A step-by-step guide to creating a stunning portfolio website using React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "UI/UX Tips for Developers",
    date: "2024-04-15",
    category: "Design",
    excerpt: "Improve your web apps with these essential UI/UX design principles and best practices.",
    link: "#",
  },
];

function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recent Articles</h2>
          <p className="text-gray-600 dark:text-gray-400">Thoughts on development, design, and technology.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all border border-transparent hover:border-primary-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                {post.excerpt}
              </p>

              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition"
              >
                Read Article <HiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
