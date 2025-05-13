const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          My <span className="text-emerald-600">Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Here are some of the technologies and tools I excel at. I am
          constantly learning and improving to stay updated with the latest
          trends in the tech world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "React", level: 70 },
            { name: "JavaScript", level: 75 },
            { name: "Node.js", level: 40 },
            { name: "TailwindCSS", level: 70 },
            { name: "UI/UX Design", level: 80 },
            { name: "SCSS", level: 75 },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {skill.name}
              </h3>
              <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-emerald-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-800 font-medium">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
