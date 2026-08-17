function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#081229] text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
          Experience
        </h2>

        <div className="bg-[#162544] p-8 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">

          <h3 className="text-2xl font-bold text-cyan-400">
            Machine Learning Intern
          </h3>

          <p className="text-lg mt-2">
            Machine Learning Internship
          </p>

          <p className="text-gray-400 mt-2">
            Hyderabad, India
          </p>

          <ul className="mt-5 space-y-3 text-gray-300">
            <li>• Built Machine Learning models using Python and Scikit-Learn.</li>
            <li>• Worked with Pandas, NumPy and Data Visualization.</li>
            <li>• Developed prediction systems and data analysis projects.</li>
            <li>• Learned model training, testing and evaluation techniques.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;