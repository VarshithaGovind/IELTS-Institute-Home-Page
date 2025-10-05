import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Shubhman",
      review: "IELTS Mastery helped me get Band 8 in just two months! Highly recommended.",
    },
    {
      name: "Rohit Sharma",
      review: "Amazing trainers and realistic mock tests. Loved the experience!",
    },
    {
      name: "Tilak",
      review: "The AI feedback system is so helpful for self-improvement!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.review}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
