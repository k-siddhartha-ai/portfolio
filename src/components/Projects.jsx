import spam from "../assets/projects/spam.png";
import sentiment from "../assets/projects/sentiment.png";
import house from "../assets/projects/house.png";
import diabetes from "../assets/projects/diabetis.png";
import lung from "../assets/projects/lung.png";
import swiggy from "../assets/projects/swiggy.png";
import fraud from "../assets/projects/fraud.png";
import churn from "../assets/projects/churn.png";

const projects = [
  {
    title: "Spam Email Detection",
    image: spam,
    tech: "Python • Scikit-Learn • NLP",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001/spam-email-detection-ml",
  },
  {
    title: "Multilingual Sentiment Analysis",
    image: sentiment,
    tech: "Transformers • Hugging Face • Gradio",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "House Price Prediction",
    image: house,
    tech: "Machine Learning • Regression",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "Diabetes Prediction",
    image: diabetes,
    tech: "Logistic Regression",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "Lung Cancer Detection",
    image: lung,
    tech: "CNN • TensorFlow",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "Swiggy Delivery Analysis",
    image: swiggy,
    tech: "Python • Pandas • Streamlit",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "Fraud Detection",
    image: fraud,
    tech: "Machine Learning",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
  {
    title: "Customer Churn Prediction",
    image: churn,
    tech: "Machine Learning",
    github: "https://github.com/k-siddhartha-ai",
    demo: "https://huggingface.co/spaces/Siddhartha001",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 pt-24 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
            >

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-contain bg-white cursor-pointer"
                />
              </a>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {project.tech}
                </p>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold text-white transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-400 hover:bg-cyan-500 px-5 py-2 rounded-lg font-semibold text-white transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;