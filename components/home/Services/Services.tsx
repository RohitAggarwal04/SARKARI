import React, { useState } from "react";
import servicesPeoples from "../../../public/assets/servicesGroup.png";
import rocket from "../../../public/assets/servicesImages/rocket.svg";
import goodsAndST from "../../../public/assets/servicesImages/desk.svg";
import trademakr from "../../../public/assets/servicesImages/trademark.svg";
import illustration from "../../../public/assets/servicesImages/Illustration.svg";
import projectReports from "../../../public/assets/servicesImages/picture.svg";
import pAndFinancial from "../../../public/assets/servicesImages/desk.svg";
import styles from "./Services.module.css";
import BoxDesign from "../BoxDesign/BoxDesign";
import Image from "next/image";

const imageSources = [
  rocket,
  goodsAndST,
  trademakr,
  illustration,
  projectReports,
  pAndFinancial,
];

export default function Services({ category }) {
  const [selectedTile, setSelectedTile] = useState(category.result[0]);
  const [isAnyTileHovered, setIsAnyTileHovered] = useState(false);
  let resetTimeout;
  const handleTileHover = (tile) => {
    setSelectedTile(tile);
    setIsAnyTileHovered(true);
    clearTimeout(resetTimeout);
    console.log(selectedTile);
  };

  const handleTileLeave = () => {
    // Set a timeout to reset the tile after a delay
    resetTimeout = setTimeout(() => {
      setSelectedTile(category.result[0]);
      setIsAnyTileHovered(false);
    }, 1200);
  };
  return (
    <main className={styles.mainSection}>
      <div className={styles.blueDesign}></div>
      <section className={styles.contentSection}>
        <Image
          src={servicesPeoples.src}
          alt="Office"
          width={380}
          height={290}
          loading="eager"
          className={styles.servicesPeoplesimg}
        />
        <section className={styles.ServicesContent}>
          <p className={styles.empowerHeading}>
            Empowering Your Financial Journey:{" "}
          </p>
          <span className={styles.subheading}>
            Unveiling the Unmatched Excellence of Sarkari Filing
          </span>
          <p className={styles.introduction}>Introduction</p>
          <p className={styles.Description}>
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
          <p className={styles.serviceDescription}>
            {selectedTile.summary_content}
          </p>
          <a
            href={`/services/${selectedTile.id}`}
            className={styles.learnMoreLink}
          >
            Learn more
          </a>
        </div>
        <div className={styles.startUpTile}>
          {category.result.map((tile, index) => (
            <div
              key={index}
              className={`${styles.tile} ${
                (!isAnyTileHovered && index === 0) ||
                (isAnyTileHovered &&
                  selectedTile.id === category.result[index].id)
                  ? styles.tileHovered
                  : ""
              }`}
              onClick={() => handleTileHover(tile)}
            >
              <Image
                width={100}
                height={100}
                src={imageSources[index]}
                alt={tile.description}
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.tileDescription}>{tile.display_name}</p>
            </div>
          ))}
        </div>
        <div className={styles.colorStyle}></div>
      </section>
    </main>
  );
}
