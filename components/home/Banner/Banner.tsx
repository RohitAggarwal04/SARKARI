"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import styles from "./Banner.module.css";
import Image from "next/image";
import BoxDesign from "../BoxDesign/BoxDesign";

const BannerItem = ({
  bannerIndex,
  className,
  subClassName,
  cardNum,
  description,
  title,
  imgUrl,
  id,
}) => {
  return (
    <div className={className}>
      <Image
        src={imgUrl}
        alt={`Slide ${bannerIndex}`}
        layout="responsive"
        height={100}
        width={100}
        priority
      />

      <div className={styles.imageSection}>
        <div
          className={subClassName}
          style={{
            backgroundColor:
              cardNum === 2
                ? "rgba(240, 195, 60, 0.60)"
                : "rgba(255, 255, 255, 0.7)",
          }}
        >
          {" "}
          <div
            className={styles.cardTitle}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: cardNum === 1 ? "flex-end" : "flex-start",
              gap: "1rem",
            }}
          >
            {cardNum === 1 && (
              <div style={{ transform: "scaleX(-1)", marginBottom: "10px" }}>
                <BoxDesign />
              </div>
            )}
            {title}
            {cardNum !== 1 && (
              <div style={{ marginBottom: "10px" }}>
                <BoxDesign />
              </div>
            )}
          </div>
          <p className={styles.cardDescription}>{description}</p>
          <a href={`/services/${id}`} className={styles.learnMoreLink}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Banner({ category, banner }) {
  const slides = [0, 2, 4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const customDotStyle = {
    width: "14px",
    height: "7px",
    background: "#3F3F46",
    borderRadius: "2px",
    margin: "0",
  };

  const customActiveDotStyle = {
    ...customDotStyle,
    background: "#2196f3",
  };
  const customPaging = (i) => (
    <button
      style={i === currentSlide ? customActiveDotStyle : customDotStyle}
      onClick={() => setCurrentSlide(i)}
    />
  );
  return (
    <Carousel
      customPaging={customPaging}
      autoplay
      autoplaySpeed={5000}
      infinite
      afterChange={(index) => setCurrentSlide(index)}
    >
      {slides.map((i, index) => (
        <div key={currentIndex}>
          <BannerItem
            bannerIndex={slides[index]}
            className={styles.imageCard1}
            subClassName={styles.cardSection}
            cardNum={1}
            description={banner.result[i].description}
            title={banner.result[i].title}
            imgUrl={banner.result[i].url}
            id={category.result[i].id}
          />
          <BannerItem
            bannerIndex={slides[index] + 1}
            className={styles.imageCard}
            subClassName={styles.cardSection2}
            cardNum={2}
            description={banner.result[i + 1].description}
            title={banner.result[i + 1].title}
            imgUrl={banner.result[i + 1].url}
            id={category.result[i + 1].id}
          />
        </div>
      ))}
    </Carousel>
  );
}
