import React from "react";
import { Carousel } from "antd";
import styles from "./Banner.module.css";
import Image from "next/image";

const banners = [
  {
    title: "Project Report",
    url: "projectreport_bnr",
    description: "Description for Project Report",
  },
  {
    title: "Personal Finance Coach",
    url: "personalfinancecoach_bnr",
    description: "Description for Personal Finance Coach",
  },
  { title: "MCA", url: "mca_bnr", description: "Description for MCA" },
  {
    title: "Trademark",
    url: "trademark_bnr",
    description: "Description for Trademark",
  },
  {
    title: "Startup",
    url: "startup_bnr",
    description: "Description for Startup",
  },
  { title: "GST", url: "gst_bnr", description: "Description for GST" },
];

const BannerItem = ({ bannerIndex, className, subClassName }) => (
  <div className={className}>
    <Image
      src={`https://sarkarifiling-assets.s3.ap-south-1.amazonaws.com/images/${banners[bannerIndex].url}.svg`}
      alt={`Slide ${bannerIndex}`}
      layout="responsive"
      width={100}
      height={100}
      priority={bannerIndex < 2}
      objectFit="contain"
      loading={bannerIndex < 2 ? "eager" : "lazy"}
    />
    <div className={styles.imageSection}>
      <div className={subClassName}>
        <p className={styles.cardTitle}>{banners[bannerIndex].title}</p>
        <p className={styles.cardDescription}>
          {banners[bannerIndex].description}
        </p>
        <a href="/" className={styles.learnMoreLink}>
          Learn more
        </a>
      </div>
    </div>
  </div>
);

export default function Banner() {
  return (
    <Carousel autoplay>
      {[0, 2, 4].map((startIndex, index) => (
        <div key={index}>
          <BannerItem
            bannerIndex={startIndex}
            className={styles.imageCard1}
            subClassName={styles.cardSection}
          />
          <BannerItem
            bannerIndex={startIndex + 1}
            className={styles.imageCard}
            subClassName={styles.cardSection2}
          />
        </div>
      ))}
    </Carousel>
  );
}
