import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPhp, FaHtml5, FaJs, FaDatabase, FaAndroid } from "react-icons/fa";

const skills = [
  { name: "Android (Java)", icon: <FaAndroid />, level: 90, color: "text-green-500" },
  { name: "PHP", icon: <FaPhp />, level: 85, color: "text-indigo-500" },
  { name: "Java", icon: <FaJava />, level: 85, color: "text-red-500" },
  { name: "MySQL", icon: <FaDatabase />, level: 80, color: "text-blue-500" },
  { name: "HTML/CSS", icon: <FaHtml5 />, level: 80, color: "text-orange-500" },
  { name: "JavaScript", icon: <FaJs />, level: 70, color: "text-yellow-400" },
];

function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Proficiency</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Continuously learning and exploring new technologies.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-3xl ${skill.color} bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}% Proficiency</span>
                </div>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-500 to-violet-500 h-2.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
