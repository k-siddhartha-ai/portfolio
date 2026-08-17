import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#020b1f",
        color: "white",
        textAlign: "center",
        padding: "30px",
        borderTop: "1px solid #00d9ff",
      }}
    >
      <h2 style={{ color: "#00d9ff" }}>
        Karne Siddhartha
      </h2>

      <p>
        AI & Machine Learning Engineer
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          margin: "20px 0",
          fontSize: "2rem",
        }}
      >
        <a
          href="https://github.com/k-siddhartha-ai"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00d9ff" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/karne-siddhartha-163bb1369/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00d9ff" }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.youtube.com/@CodeWithSiddhartha"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00d9ff" }}
        >
          <FaYoutube />
        </a>

        <a
          href="mailto:karnesiddhartha04@gmail.com"
          style={{ color: "#00d9ff" }}
        >
          <FaEnvelope />
        </a>
      </div>

      <p>© 2026 Karne Siddhartha. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;