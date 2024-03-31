import React from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <>
      <section id="contact-us" className={styles.contactUsSection}>
        <div className={styles.formSection}>
          <h3 className={styles.heading}>Get In Touch With Us</h3>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write here..."
                className={styles.input}
              ></textarea>
            </div>
            <button className={styles.contactBtnSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className={styles.contactInfoMain}>
          <p className={styles.contactUsHeading}>Connect with us</p>
          <p style={{ fontWeight: "500", fontSize: "18px" }}>
            At Sarkari Filing For Project Proposal and Other Services
          </p>
          <p className={styles.contactDescription}>
            Choosing Sarkari Filing is not just a transaction; it's an
            investment in the success and growth of your business. With
            unmatched expertise, streamlined processes, and a commitment to
            excellence , Sarkari Filing stands tall as the premier choice for
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
