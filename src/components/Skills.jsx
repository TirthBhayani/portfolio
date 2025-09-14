import React from "react";

const skills = [
  { name: "Android (Java)", icon: "🤖", level: 90 },
  { name: "PHP", icon: "🐘", level: 85 },
  { name: "Java", icon: "☕", level: 85 },
  { name: "MySQL", icon: "🗄️", level: 80 },
  { name: "HTML/CSS", icon: "🌐", level: 80 },
  { name: "JavaScript", icon: "🟨", level: 70 },
];

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
        Skills
      </h2>
      <div className="max-w-3xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-semibold text-lg text-gray-100">
                {skill.name}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
