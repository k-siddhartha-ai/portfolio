function Skills() {

  const skills = [
    "Python",
    "Java",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "OpenCV",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "Streamlit",
    "Gradio",
    "Git",
    "GitHub",
    "Docker",
    "Hugging Face"
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-14">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="
                bg-slate-800
                p-6
                rounded-xl
                text-center
                hover:bg-cyan-500
                hover:scale-105
                duration-300
                shadow-xl
              "
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;