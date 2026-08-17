function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400"
        >
          Karne Siddhartha
        </a>

        {/* Navigation */}
        <ul className="flex gap-8 text-lg">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-cyan-400 duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-cyan-400 duration-300"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className="hover:text-cyan-400 duration-300"
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;