import React from "react";
import { Carousel } from "antd";
const Testimonial = ({ text, name, position }: any) => (
  <div style={{ width: "20rem" }}>
    <div style={{ position: "relative" }} className="CardProfile">
      <p>{text}</p>
      <p
        style={{
          color: "green",
          fontSize: "2rem",
          position: "absolute",
          top: "0px",
          left: "32px",
        }}
      >
        "
      </p>
      <div className="profileImgeSec">
        ~<p>{name}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    text: "Very quick and effective service with flexible rates. He filed it within 1 hour on the last day at 8 pm.",
    name: "Amit",
    position: "CEO, ATS",
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
