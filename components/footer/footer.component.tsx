import React, { useState } from "react";
import styles from "./footer.module.css";
import mainLogo from "../../public/assets/logo1.png";
import Image from "next/image";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  RightCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Link from "next/link";

function FooterComponent({ category }) {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://www.sarkarifiling.com/api/lead/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.subFooter}>
            <section style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={mainLogo.src}
                alt="logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <p style={{ fontSize: "2.2em", marginLeft: "8px" }}>
                Sarkari Filing
              </p>
            </section>
            <section style={{ width: "100%" }}>
              <p>Want to talk with us</p>
              <div className={styles.footerInputContainer}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email here"
                    className={styles.footerInput}
                  />{" "}
                </form>
                <RightCircleFilled className={styles.footerIcon} />
              </div>
            </section>
          </div>
          <div className={styles.sectionLinkSer}>
            <div
              style={{
                listStyle: "none",
                width: "10rem",
                alignSelf: "flex-start",
              }}
            >
              <div>
                <h4 style={{ fontFamily: "FuturaMdBt" }}>Quick Links</h4>
              </div>
              <div className={styles.link}>
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="services/12">Services</Link>

                <Link href="tel:+917892126783">Contact Us</Link>
              </div>
            </div>
            <div style={{ listStyle: "none" }}>
              <div>
                <h4 style={{ fontFamily: "FuturaMdBt" }}>Services</h4>
              </div>
              <div className={styles.link}>
                {category?.result?.map((item) => (
                  <Link href={`/services/${item.id}`} key={item.id}>
                    {item.display_name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div style={{ listStyle: "none" }} className={styles.getInTouch}>
            <div>
              <h4 style={{ fontFamily: "FuturaMdBt" }}>Get In Touch</h4>
            </div>
            <div>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                href="tel:+917892126783"
              >
                Contact Us
              </Link>
              <div
                style={{
                  display: "flex",
                  columnGap: "1rem",
                  fontSize: "24px",
                  marginTop: "1rem",
                }}
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Sarkarifiling"
                  style={{ color: "white" }}
                >
                  <FacebookFilled />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/sarkarifiling_2024/"
                  style={{ color: "white" }}
                >
                  <InstagramFilled />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@SarkariFiling-2024"
                  style={{ color: "white" }}
                >
                  <YoutubeFilled />
                </Link>
                <Link
                  target="_blank"
                  href="www.linkedin.com/in/sarkari-filing"
                  style={{ color: "white" }}
                >
                  <LinkedinFilled />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.conditionSection}>
          <div>
            <p>© 2024 Sarkari Filing. Copyright and rights reserved</p>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
