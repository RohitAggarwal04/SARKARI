import React from "react";
import BoxDesign from "../BoxDesign/BoxDesign";
import styles from "./Benefit.module.css";

export default function Benefits() {
  const tilesData = [
    {
      title: "Project Report Preparation is Fast",
      description:
        "Though the project proposal by Sarkari Filing is exhaustive, we are still the fastest in preparing the project report, depending on your needs.",
    },
    {
      title: "Visible Quality Improvement",
      description:
        "When you hire Sarkari Filing for project report preparation, you can rest assured that the resulting report shall have visible improvements and be far more effective.",
    },
    {
      title: "Cost- Effective",
      description:
        "A project report made by Sarkari Filing is also better than doing it in-house. Not only do you get better results but at a lesser cost while keeping your resources focused on your core business operations.",
    },
    {
      title: "Sarkari Filing consultants are the best",
      description:
        "They all have an eye for detail and a genius for crunching numbers that are second to none.",
    },
  ];

  return (
    <main
      className={styles.BenefitsMainSection}
      style={{ fontFamily: "futura, sans-serif" }}
    >
      <section className={styles.headingSection}>
        <p className={styles.heading}>
          Perks of Project Report Preparation by Sarkari Filing
        </p>
        <p className={styles.subheading}>
          The following are some of the chief perks of going for the project
          proposals from Sarkari Filing:
        </p>
        <section className={styles.tileSection}>
          {tilesData.map((tile, index) => (
            <div className={styles.benefitsTiles} key={index}>
              <BoxDesign />
              <p className={styles.tileTitle}>{tile.title}</p>
              <p className={styles.tileDescription}>{tile.description}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
