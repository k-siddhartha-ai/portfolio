function Achievements() {
  const achievements = [
    {
      value: "8.6",
      title: "Current CGPA",
    },
    {
      value: "8+",
      title: "AI / ML Projects",
    },
    {
      value: "19",
      title: "GitHub Repositories",
    },
    {
      value: "2+",
      title: "AI Certifications",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-[#081229] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-14">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#162544] p-8 rounded-2xl text-center border border-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400 mb-3">
                {item.value}
              </h3>

              <p className="text-lg text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;