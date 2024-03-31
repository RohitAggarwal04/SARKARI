import React from "react";
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
export default function Services() {
  const tiles = [
    {
      src: rocket.src,
      description: "Start Up",
      backgroundColor: "rgba(255, 210, 52, 1)",
    },
    {
      src: goodsAndST.src,
      description: "Goods And Services Tax",
      backgroundColor: "rgba(121, 153, 234, 1)",
    },
    {
      src: projectReports.src,
      description: "Project Reports",
      backgroundColor: "rgba(121, 153, 234, 1)",
    },
    {
      src: illustration.src,
      description: "Personal & Finance Coach",
      backgroundColor: "rgba(121, 153, 234, 1)",
    },
    {
      src: pAndFinancial.src,
      description: "MCA Compliances",
      backgroundColor: "rgba(121, 153, 234, 1)",
    },
    {
      src: trademakr.src,
      description: "Trademarks",
      backgroundColor: "rgba(121, 153, 234, 1)",
    },
  ];

  return (
    <main className={styles.mainSection}>
      <div className={styles.blueDesign}></div>
      {/* section contet and image  */}
      <section className={styles.contentSection}>
        <div className={styles.servicesPeoplesimg}>
          <Image
            src={servicesPeoples.src}
            alt="Office"
            width={380}
            height={290}
            loading="eager"
          />
        </div>
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
            explores why Sarkari Filing stands out as the unrivalled choice for
            businesses, ensuring a seamless and efficient journey towards
            financial excellence.
          </p>
        </section>
      </section>
      <section className={styles.sectionOurServices}>
        <div className={styles.ourServicesContent}>
          <div className={styles.headingWithLogo}>
            <BoxDesign />
            <h3 className={styles.servicesHeading}>Our Services</h3>
          </div>
          <h4 className={styles.serviceTitle}>Start Up</h4>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            vero amet. Similique cum architecto reprehenderit quae repellat.
            Odio deserunt facere in quibusdam consequuntur iusto animi porro
            nesciunt quos veritatis impedit quasi eveniet autem vel
          </p>
          <a href="/" className={styles.learnMoreLink}>
            Learn more
          </a>
        </div>

        <div className={styles.startUpTile}>
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={styles.tile}
              style={{ backgroundColor: tile.backgroundColor }}
            >
              <Image
                width={100}
                height={100}
                src={tile.src}
                alt={tile.description}
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.tileDescription}>{tile.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.colorStyle}></div>
      </section>
    </main>
  );
}
