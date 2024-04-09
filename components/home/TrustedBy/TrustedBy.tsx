import React, { useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import unionBank from "../../../public/assets/customer/1.png";
import CanraBank from "../../../public/assets/customer/2.png";
import bpl from "../../../public/assets/customer/3.png";
import shashilogo from "../../../public/assets/customer/4.svg";
import Scgb from "../../../public/assets/customer/5.png";
import Qoutemark from "../../../public/assets/Quote-mark.svg";
import styles from "./trustedBy.module.css";
import { BsPersonSquare } from "react-icons/bs";

const CustomDots = ({ currentSlide, goToSlide }) => {
  return (
    <div style={{ display: "flex", gap: "25px", marginLeft: "40%" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          background:
            currentSlide === 0 || currentSlide === 4 || currentSlide === 8
              ? "#2196f3"
              : "#a6a6a6",
          marginTop: "5rem",
        }}
        onClick={() => {
          currentSlide >= 4 ? goToSlide(4) : goToSlide(0);
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "10px",
          background:
            currentSlide === 1 || currentSlide === 5 || currentSlide === 9
              ? "#2196f3"
              : "#a6a6a6",
          marginTop: "5rem",
        }}
        onClick={() => {
          currentSlide >= 4 ? goToSlide(5) : goToSlide(1);
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "10px",
          background:
            currentSlide === 2 || currentSlide === 6 ? "#2196f3" : "#a6a6a6",
          marginTop: "5rem",
        }}
        onClick={() => {
          currentSlide >= 4 ? goToSlide(6) : goToSlide(2);
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "10px",
          background:
            currentSlide === 3 || currentSlide === 7 ? "#2196f3" : "#a6a6a6",
          marginTop: "5rem",
        }}
        onClick={() => {
          currentSlide >= 4 ? goToSlide(7) : goToSlide(3);
        }}
      ></div>
    </div>
  );
};

export default function TrustedBy({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);

    carouselRef.goTo(index);
  };
  let carouselRef;
  return (
    <>
      <section className={styles.logos}>
        <div className={styles.logoHeading}>
          <h3 className={styles.heading}>Trusted By</h3>
          <div className={styles.logoImagesTestimonial}>
            <Image
              src={shashilogo.src}
              alt="Shashi logo"
              width={100}
              height={90}
              loading="lazy"
            />
            <Image
              src={unionBank.src}
              alt="Union Bank"
              width={120}
              height={50}
              loading="lazy"
            />
            <Image
              src={CanraBank.src}
              alt="Canara Bank"
              width={100}
              height={50}
              loading="lazy"
            />
            <Image
              src={bpl.src}
              alt="BPL"
              width={90}
              height={90}
              loading="lazy"
            />
            <Image
              src={Scgb.src}
              alt="Shashi logo"
              width={140}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className={styles.testimonialSec}>
        <div className={styles.clientTesti}>
          <h3 className={styles.heading} style={{ color: "white" }}>
            Client Testimonial
          </h3>
          <p>
            Sarkari filing works with some of the most dynamic industries across
            India and provides hassle-free services in financial aspects, be it
            tax audits or trademarking.
          </p>
        </div>
        <div className={styles.CardProfileContainer}>
          <div className={styles.CardProfile}>
            <Carousel
              autoplay={true}
              swipeToSlide={true}
              draggable
              afterChange={(index) => {
                setCurrentSlide(index);
              }}
              infinite
              ref={(ref) => (carouselRef = ref)}
            >
              {testimonials?.result?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                  }}
                  className="CardProfile"
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "5px",
                    }}
                  >
                    {" "}
                    <Image
                      src={Qoutemark}
                      alt="quote-mark"
                      width={18}
                      height={18}
                    />
                    <p
                      style={{
                        margin: 0,
                        color: "#111827",
                      }}
                    >
                      {item.display_text}
                    </p>
                  </span>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "2.7rem",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <BsPersonSquare
                      style={{ color: "#2196F3", fontSize: "40px" }}
                    />
                    <p className={styles.profileImgeSec}>~{item.owner}</p>
                  </div>
                </div>
              ))}
            </Carousel>{" "}
            <CustomDots currentSlide={currentSlide} goToSlide={goToSlide} />
          </div>
        </div>
      </section>
    </>
  );
}
