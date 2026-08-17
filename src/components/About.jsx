function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-800 text-white flex items-center px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

        <p className="text-xl leading-9 text-gray-300">
          I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Karne Siddhartha
          </span>
          , a passionate AI & Machine Learning Engineering student from Hyderabad.

          <br /><br />

          I enjoy building intelligent applications using Python,
          Machine Learning, Deep Learning, NLP, Computer Vision,
          and Generative AI.

          <br /><br />

          My goal is to become an AI Engineer at a top product company,
          where I can build impactful AI solutions that solve real-world problems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

          <div className="bg-slate-700 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              19+
            </h3>
            <p className="mt-2 text-gray-300">
              AI Projects
            </p>
          </div>

          <div className="bg-slate-700 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              10+
            </h3>
            <p className="mt-2 text-gray-300">
              Technologies
            </p>
          </div>

          <div className="bg-slate-700 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              2
            </h3>
            <p className="mt-2 text-gray-300">
              AI Certifications
            </p>
          </div>

          <div className="bg-slate-700 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              2028
            </h3>
            <p className="mt-2 text-gray-300">
              Graduation
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;