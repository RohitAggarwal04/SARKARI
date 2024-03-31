import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import unionBank from "../../../public/assets/customer/1.svg";
import CanraBank from "../../../public/assets/customer/2.svg";
import bpl from "../../../public/assets/customer/3.svg";
import shashilogo from "../../../public/assets/customer/4.svg";
import Qoutemark from "../../../public/assets/Quote-mark.svg";
import styles from "./trustedBy.module.css";

export default function TrustedBy({ testimonials }) {
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
              height={50}
              loading="lazy"
            />
            <Image
              src={unionBank.src}
              alt="Union Bank"
              width={100}
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
              width={100}
              height={50}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className={styles.testimonialSec}>
        <div className={styles.clientTesti}>
          <h3 className={styles.heading}>Client Testimonial</h3>
          <p>
            Sarkari filing works with some of the most dynamic industries across
            India and provides hassle-free services in financial aspects, be it
            tax audits or trademarking.
          </p>
        </div>
        <div className={styles.CardProfileContainer}>
          <div className={styles.CardProfile}>
            <Carousel autoplay>
              {testimonials?.result?.map((item, index) => (
                <div
                  key={index}
                  style={{ position: "relative", width: "20rem" }}
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
                      alt="qoute-mark"
                      width={18}
                      height={18}
                    />
                    <p style={{ margin: 0, fontWeight: 500, fontSize: "16px" }}>
                      {item.display_text}
                    </p>
                  </span>

                  <p className={styles.profileImgeSec}>~{item.owner}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
