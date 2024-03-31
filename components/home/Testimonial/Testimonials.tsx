import React from "react";
import highRisebuilding from "../../../public/assets/testimonial/highRiseBuilding.svg";
import groupOfOffice from "../../../public/assets/testimonial/peopleInoffice.svg";
import BoxDesign from "../BoxDesign/BoxDesign";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import { CheckOutlined } from "@ant-design/icons";
export default function Testimonials() {
  const listItems = [
    "Expertise in diverse financial services",
    "Streamlined processes for hassle-free transactions",
    "End-to-end support for a holistic experience",
    "Technologically advanced platform",
    "Compliance Assurance and Regulatory Adherence",
    "Transparent and affordable pricing",
    "Testimonials and success stories",
  ];
  return (
    <main className={styles.testimonialsMainsection}>
      <section className={styles.officePublic}>
        <div style={{ marginTop: "5rem" }}>
          <Image
            width={400}
            height={300}
            loading="lazy"
            src={groupOfOffice.src}
            alt="Office"
            style={{
              objectFit: "cover",
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
            }}
          />
        </div>

        <div className={styles.contentBox}>
          <h1 className={styles.heading}>When to Choose Sarkari Filing:</h1>
          <p style={{ margin: 0 }}>
            Get project reports prepared for bank loans, potential investors,
            government officials, or availing government schemes.
          </p>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <BoxDesign />
            </div>
            <div className={styles.serviceDetails}>
              <p className={styles.serviceTitle}>
                Sarkari Filing Services for Your Startups:
              </p>

              <p className={styles.serviceDescription}>
                Access services for LLP registration, Pvt Ltd company
                registration, trust registration, Mudra loans, CGTMSE benefits,
                trademark registration, and GST registration.
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <BoxDesign />
            </div>
            <div className={styles.serviceDetails}>
              <p className={styles.serviceTitle}>
                Project Report for Bank Loan by Sarkari Filing:
              </p>

              <p className={styles.serviceDescription}>
                Benefit from our experts' knowledge to compile potent project
                reports for bank loans, ensuring easy terms and conditions.
              </p>
            </div>
          </div>{" "}
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <BoxDesign />
            </div>
            <div className={styles.serviceDetails}>
              <p className={styles.serviceTitle}>
                Sarkari Filing Personal Financial Advisor Services:
              </p>

              <p className={styles.serviceDescription}>
                Receive personalized financial coaching and advisory services to
                manage your personal finances effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.buildingSection}>
        <div className={styles.buildingContentSection}>
          <h5 className={styles.heading} style={{ fontWeight: "500" }}>
            What Benefit Will You Get
          </h5>
          <div className={styles.listSection}>
            {listItems.map((item, index) => (
              <div key={index} className={styles.contentListTestmonial}>
                <span className={styles.checkmark}>
                  <CheckOutlined />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            width={400}
            height={300}
            loading="lazy"
            src={highRisebuilding}
            alt="Office"
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "22px",
              borderBottomLeftRadius: "22px",
            }}
          />
        </div>
      </section>
    </main>
  );
}
