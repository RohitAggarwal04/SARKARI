"use client";
import React, { useState } from "react";
import proposalImage from "../../../public/assets/proposalImages/proposal.png";
import styles from "./Proposal.module.css";
import Image from "next/image";

export default function Proposal() {
  const [showFull, setShowFull] = useState(false);
  return (
    <main
      className={styles.proposalMainSection}
      style={{ overflowX: "hidden" }}
    >
      <div className={styles.borderLeft} />
      <div className={styles.mainContent}>
        <div className={styles.Image} style={{ position: "relative" }}>
          <Image
            layout="fill"
            loading="lazy"
            src={proposalImage}
            alt="Image"
            style={{
              objectFit: "contain",
              borderTopLeftRadius: "42px",
              borderBottomLeftRadius: "12px",
              marginTop: "-4.5%",
            }}
          />
        </div>

        <div className={styles.proposalContent}>
          <p className={styles.proposalTitle}>
            Project Proposal by Sarkari Filing
          </p>
          <p className={styles.proposalDescription}>
            When an idea is conceived in your mind, it must find its way to
            paper before it can become reality. Crafting a compelling project
            report is one of the first steps and paramount for securing startup
            funding. It should encompass details of all key elements, including
            not only the factual and financial details, but also details of a
            robust seed funding strategy, a persuasive pitch, and a clearly
            defined roadmap for attracting private funding. When done right, it
            can give the business an essential lifeline in the form of
            sufficient funding required to drive your entrepreneurial ventures
            to new heights. Getting your project report made through us is the
            best way to get it right.
          </p>{" "}
          {showFull && (
            <>
              <p className={styles.proposalDescription}>
                Project reports have to tick a number of items in an imaginary
                checklist like it should be compelling, brief, exhaustive, etc.
                That is why getting them made by professionals is only prepared
                by the best experts and after a thorough study of both the
                proposed business and the industry it will target.
              </p>{" "}
              <p className={styles.proposalDescription}>
                If you have your own ideas about the project report or have
                already prepared it, then you can still take advice from project
                report consultants on how you can best improve the service.
              </p>{" "}
            </>
          )}
          <p
            onClick={() => setShowFull(!showFull)}
            className={styles.buttonLearnMore}
          >
            Learn More
          </p>
        </div>
      </div>
    </main>
  );
}
