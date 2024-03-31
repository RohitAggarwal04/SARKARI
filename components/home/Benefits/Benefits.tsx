import React from "react";
import BoxDesign from "../BoxDesign/BoxDesign";
import styles from "./Benefit.module.css";

export default function Benefits() {
  const boxDesign = (
    <div className={styles.boxDesign}>
      <BoxDesign />
    </div>
  );

  return (
    <main className={styles.BenefitsMainSection}>
      <section className={styles.headingSection}>
        <p className={styles.heading}>
          Perks of Project Report Preparation by Sarkari Filing
        </p>
        <p className={styles.subheading}>
          The following are some of the chief perks of going for the project
          proposals from Sarkari Filing:
        </p>
        <section className={styles.tileSection}>
          <div className={styles.benefitsTiles}>
            {boxDesign}
            <p className={styles.tileTitle}>
              Project Report Preparation is Fast
            </p>
            <p>
              Though the project proposal by Sarkari Filing is exhaustive, we
              are still the fastest in preparing the project report, depending
              on your needs.
            </p>
          </div>
          <div className={styles.benefitsTiles}>
            {boxDesign}
            <p className={styles.tileTitle}>Visible Quality Improvement</p>
            <p>
              When you hire Sarkari Filing for project report preparation, you
              can rest assured that the resulting report shall have visible
              improvements and be far more effective.
            </p>
          </div>
          <div className={styles.benefitsTiles}>
            {boxDesign}
            <p className={styles.tileTitle}>Cost- Effective</p>
            <p>
              A project report made by Sarkari Filing is also better than doing
              it in-house. Not only do you get better results but at a lesser
              cost while keeping your resources focused on your core business
              operations.
            </p>
          </div>
          <div className={styles.benefitsTiles}>
            {boxDesign}
            <p className={styles.tileTitle}>
              Sarkari Filing consultants are the best
            </p>
            <p>
              They all have an eye for detail and a genius for crunching numbers
              that are second to none.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
