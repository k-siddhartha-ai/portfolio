import profile from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";

import { SiHuggingface, SiKaggle } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center px-6 md:px-16 pt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-16">

        {/* Left Side */}
        <div className="text-center md:text-left flex-1">

          <p className="text-cyan-400 text-lg font-semibold mb-3">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Karne Siddhartha
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mt-6">
            AI & Machine Learning Engineer
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mt-5 leading-8 max-w-2xl">
            Passionate AI & Machine Learning Engineer with hands-on experience
            in Machine Learning, Deep Learning, NLP, Python Development,
            Computer Vision, and Generative AI. I enjoy building intelligent
            applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="/resume/Karne_Siddhartha_Resume.pdf"
              download
              className="border-2 border-cyan-400 hover:bg-cyan-500 px-8 py-3 rounded-lg font-bold transition-all duration-300 text-center"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-7 mt-10 text-3xl">

            <a
              href="https://github.com/k-siddhartha-ai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/karne-siddhartha-163bb1369/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://huggingface.co/Siddhartha001"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 duration-300"
            >
              <SiHuggingface />
            </a>

            <a
              href="https://www.kaggle.com/karnesiddhartha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <SiKaggle />
            </a>

            <a
              href="https://medium.com/@karnesiddhartha04"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white duration-300"
            >
              <FaMedium />
            </a>

            <a
              href="https://www.youtube.com/@CodeWithSiddhartha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 duration-300"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center flex-1">

          <img
            src={profile}
            alt="Karne Siddhartha"
            className="w-72 h-72 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;