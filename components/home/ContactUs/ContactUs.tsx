import React, { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setEmail("");
      setMessage("");
      const response = await fetch(
        "https://www.sarkarifiling.com/api/lead/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        // You can add further logic here, such as displaying a success message or resetting the form
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <>
      <section id="contact-us" className={styles.contactUsSection}>
        <div className={styles.formSection}>
          <h3 className={styles.heading}>Get In Touch With Us</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write here..."
                className={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className={styles.contactBtnSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className={styles.contactInfoMain}>
          <p className={styles.contactUsHeading}>Connect with us</p>
          <p
            style={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#3F3F46",
              fontFamily: "FuturaMdBt",
            }}
          >
            At Sarkari Filing For Project Proposal and Other Services
          </p>
          <p className={styles.contactDescription}>
            Choosing Sarkari Filing is not just a transaction; it's an
            investment in the success and growth of your business. With
            unmatched expertise, streamlined processes, and a commitment to
            excellence, Sarkari Filing stands tall as the premier choice for
            businesses seeking unparalleled financial and business support
            services. Embrace a journey of financial empowerment with Sarkari
            Filing, where your success is our mission.
          </p>
          <p className={styles.contactDescription}>
            A perusal of the above discussion must have by now persuaded you of
            the merits of other services like the project proposal by Sarkari
            Filing. So, if you are interested in any of Sarkari Filing's
            services, just get in touch with us. You can use our website to
            learn about our services, like project reports for bank loans by
            Sarkari Filing, and request them from here, too.
          </p>
        </div>
      </section>
    </>
  );
}
