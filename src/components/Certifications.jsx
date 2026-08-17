function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#081229] text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Certificate 1 */}
          <div className="bg-[#162544] p-6 rounded-xl border border-cyan-400 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-cyan-400">
              Advanced Certification in Artificial Intelligence
            </h3>

            <p className="mt-3 text-gray-300">
              Issued by: Glowlogics Solutions
            </p>

            <p className="text-gray-400 mt-2">
              Issue Date: January 2026
            </p>

            <p className="mt-4 text-gray-300">
              Successfully completed advanced certification
              in Artificial Intelligence covering Machine Learning,
              Data Analysis, and AI concepts.
            </p>

          </div>

          {/* Certificate 2 */}
          <div className="bg-[#162544] p-6 rounded-xl border border-cyan-400 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-cyan-400">
              Artificial Intelligence Internship
            </h3>

            <p className="mt-3 text-gray-300">
              Organization: Glowlogics Solutions
            </p>

            <p className="text-gray-400 mt-2">
              Issue Date: January 2026
            </p>

            <p className="mt-4 text-gray-300">
              Completed Artificial Intelligence Internship
              involving Machine Learning, Data Analysis,
              Python Development, and AI applications.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;