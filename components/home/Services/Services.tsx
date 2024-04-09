import React, { useState } from "react";
import servicesPeoples from "../../../public/assets/servicesGroup.png";
import rocket from "../../../public/assets/servicesImages/rocket.svg";
import goodsAndST from "../../../public/assets/servicesImages/desk.svg";
import trademakr from "../../../public/assets/servicesImages/trademark.svg";
import illustration from "../../../public/assets/servicesImages/Illustration.svg";
import projectReports from "../../../public/assets/servicesImages/picture.svg";

import objects from "../../../public/assets/servicesImages/objects.svg";
import styles from "./Services.module.css";
import BoxDesign from "../BoxDesign/BoxDesign";
import Image from "next/image";
import Link from "next/link";

const imageSources = [
  rocket,
  goodsAndST,
  projectReports,
  illustration,
  objects,
  trademakr,
];

export default function Services({ category }) {
  const [selectedTile, setSelectedTile] = useState(category.result[0]);
  const [isAnyTileHovered, setIsAnyTileHovered] = useState(false);
  let resetTimeout;
  const handleTileHover = (tile) => {
    setSelectedTile(tile);
    setIsAnyTileHovered(true);
    clearTimeout(resetTimeout);
  };
  const handleMouseLeave = () => {
    const resetTimeout = setTimeout(() => {
      setSelectedTile(category.result[0]);
    }, 2000); // Delay reset by 2 seconds (2000 milliseconds)
  };
  const boxStyle = {
    width: "16px",
    height: "8px",
    backgroundColor: "#E5E5E5",
    display: "block",
    opacity: "20%",
  };

  const boxWithMarginStyle = {
    ...boxStyle,
    marginLeft: "0",
    marginTop: "10px",
  };

  return (
    <main className={styles.mainSection}>
      <div className={styles.blueDesign}></div>
      <section className={styles.contentSection}>
        <div
          className={styles.Image}
          style={{ position: "relative", marginTop: "80px" }}
        >
          <Image
            src={servicesPeoples.src}
            alt="Office"
            layout="fill"
            loading="eager"
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "42px",
              borderBottomLeftRadius: "12px",
            }}
          />
        </div>

        <section
          className={styles.ServicesContent}
          style={{ marginTop: "80px" }}
        >
          <p className={styles.empowerHeading}>
            Empowering Your Financial Journey:{" "}
          </p>
          <span className={styles.subheading}>
            Unveiling the Unmatched Excellence of Sarkari Filing
          </span>
          <p className={styles.introduction}>Introduction</p>
          <p className={styles.serviceDescription}>
            In the fast-paced world of business and finance, navigating through
            regulatory frameworks, compliance matters, and paperwork can be
            daunting. Enter Sarkari Filing, your beacon in the realm of online
            financial and business support services. This comprehensive guide
            explores why Sarkari Filing stands out as the unrivaled choice for
            businesses, ensuring a seamless and efficient journey towards
            financial excellence.{" "}
          </p>
        </section>
      </section>
      <section className={styles.sectionOurServices}>
        <div className={styles.ourServicesContent}>
          <div className={styles.headingWithLogo}>
            <BoxDesign />
            <h3 className={styles.servicesHeading}>Our Services</h3>
          </div>
          <h4 className={styles.serviceTitle}>{selectedTile.display_name}</h4>
          <p className={styles.serviceDescription} style={{ marginLeft: "2%" }}>
            {selectedTile.summary_content}
          </p>
          <a
            href={`/services/${selectedTile.id}`}
            className={styles.learnMoreLink}
            style={{ marginLeft: "2%" }}
          >
            Learn more
          </a>
        </div>
        <div className={styles.startUpTile}>
          {category.result.map((tile, index) => (
            <Link
              href={`/services/${tile.id}`}
              key={index}
              className={`${styles.tile} ${
                (!isAnyTileHovered && index === 0) ||
                (isAnyTileHovered &&
                  selectedTile.id === category.result[index].id)
                  ? styles.tileHovered
                  : ""
              }`}
              onMouseEnter={() => handleTileHover(tile)}
              onMouseLeave={() => handleTileHover(category.result[0])}
            >
              <Image
                width={155}
                height={100}
                src={imageSources[index]}
                alt={tile.description}
                className={styles.image}
                style={{ marginLeft: "10%" }}
                loading="lazy"
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  marginBottom: "0",
                }}
              >
                <div style={boxWithMarginStyle}></div>{" "}
                {/* This div has a margin from the left */}
                <div style={boxStyle}></div>
              </div>
              <p
                className={styles.tileDescription}
                style={{ marginLeft: "10px" }}
              >
                {tile.display_name}
              </p>
            </Link>
          ))}
        </div>
        <div className={styles.colorStyle}></div>
      </section>
    </main>
  );
}
