function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "#081229",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#00d9ff",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      <div
        style={{
          background: "#16233f",
          padding: "30px",
          borderRadius: "15px",
          width: "500px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,217,255,0.3)",
        }}
      >
        <h3>Email</h3>
        <p>karnesiddhartha04@gmail.com</p>

        <h3>Location</h3>
        <p>Hyderabad, Telangana, India</p>

        <h3>Career Goal</h3>
        <p>
          AI & Machine Learning Engineer passionate about building
          intelligent applications and solving real-world problems.
        </p>
      </div>
    </section>
  );
}

export default Contact;