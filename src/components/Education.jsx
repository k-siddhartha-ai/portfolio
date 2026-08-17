function Education() {
  return (
    <section
      id="education"
      className="bg-[#081229] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
          Education
        </h2>

        {/* Education Card */}
        <div className="bg-[#162544] p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">

          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
            Bachelor of Technology (B.Tech)
          </h3>

          <h4 className="text-xl text-white mt-2">
            Artificial Intelligence & Machine Learning
          </h4>

          <p className="text-gray-300 mt-4">
            Guru Nanak University, Hyderabad
          </p>

          <p className="text-gray-400 mt-2">
            2024 - 2028
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">
              CGPA: 8.6
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">
              AIML Department
            </span>
          </div>

          <p className="mt-6 text-gray-300 leading-7">
            Focused on Artificial Intelligence, Machine Learning,
            Data Structures & Algorithms, Database Management Systems,
            Software Engineering, Deep Learning, and Full Stack Development.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;