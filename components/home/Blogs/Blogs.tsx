import React from "react";
import cover from "../../../public/assets/blogs/cover.svg";
import styles from "./blogs.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Blogs({ blogs }) {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      {blogs?.result?.length !== 0 && (
        <section className={styles.blogLogos}>
          <div className={styles.bloglogoHeading}>
            <h3 className={styles.heading}>Our Blogs</h3>
          </div>
          <section className={styles.blogTiles}>
            {blogs?.result?.map((item) => (
              <Link
                href={item.url}
                className={styles.tileCard}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <Image
                  width={100}
                  height={100}
                  src={cover}
                  alt="blog"
                  loading="lazy"
                  quality={100}
                />
                <div className={styles.cardContent}>
                  <p className={styles.title}>{item.title} </p>
                  <p className={styles.description}>{item.description}</p>
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p
                      style={{
                        fontFamily: "Raleway,sans-serif",
                        color: "#121316",
                      }}
                    >
                      {formatDate(item.created_on)}
                    </p>

                    <p style={{ color: "#2196F3" }}>Read More</p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </section>
      )}
    </>
  );
}
