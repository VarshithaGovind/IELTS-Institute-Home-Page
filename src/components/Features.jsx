import React from "react";

function Features() {
  const features = [
    {
      title: "Speaking Practice",
      desc: "Live sessions with expert tutors to boost your confidence.",
    },
    {
      title: "AI Band Score",
      desc: "Smart analysis of your practice tests with AI feedback.",
    },
    {
      title: "Mock Tests",
      desc: "Unlimited mock tests with real-time scoring.",
    },
    {
      title: "Progress Tracking",
      desc: "Track your performance and identify areas for improvement.",
    },
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
