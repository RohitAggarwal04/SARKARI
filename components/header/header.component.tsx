"use client";
import React from "react";

import styles from "./header.module.css";
import logo from "../../public/assets/logo1.png";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function Header({ category, isAnotherpage }) {
  const [items, setItems] = useState([]);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showServices, setShowServices] = useState(true);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    if (openNavigation) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [openNavigation]);
  useEffect(() => {
    const handleScroll = () => {
      const mainHeader = document.querySelector(
        `.${styles.mainHeader}`
      ) as HTMLElement;
      if (openNavigation) mainHeader.style.background = "white";
      if (window.scrollY > 50) {
        mainHeader.style.background = "white";
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (category) {
      Promise.all(category.result.map(({ id }) => fetchSubCategories(id)))
        .then((subCategoriesArray) => {
          const formattedItems = category.result.map((category, index) => ({
            key: `${index}`,
            label: ` ${category.display_name}`,
            children: subCategoriesArray[index].map(
              (subCategory, subIndex) => ({
                key: `${index}-${subIndex}`,
                label: (
                  <Link
                    href={`/services/${category.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {subCategory.display_name}{" "}
                  </Link>
                ),
              })
            ),
          }));
          setItems(formattedItems);
        })
        .catch((error) => {
          console.error("Error fetching sub-categories:", error);
        });
    }
  }, []);

  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await fetch(
        `http://65.2.101.63:9000/api/sub_category?category_id=${categoryId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const subCategories = await response.json();

      return subCategories.result;
    } catch (error) {
      console.error("Error fetching sub-categories:", error);
      return [];
    }
  };

  return (
    <header
      className={styles.mainHeader}
      style={{
        background: openNavigation || hasScrolled ? "white" : "transparent",
        color: openNavigation ? "black" : "inherit",
      }}
    >
      <Link href="/" className={styles.logoSection}>
        {" "}
        <Image
          width={40}
          height={40}
          src={logo.src}
          alt="logo"
          style={{ marginRight: "20px" }}
        />{" "}
        <p
          style={{
            fontWeight: "500",
            fontSize: "18px",
            color:
              isAnotherpage || hasScrolled || openNavigation
                ? "#2196F3"
                : "white",
          }}
        >
          Sarkari Filing
        </p>{" "}
      </Link>
      <section className={styles.menuSection}>
        <div className={styles.menuList}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>{" "}
          <Dropdown
            menu={{ items }}
            overlayStyle={{}}
            placement="bottom"
            dropdownRender={(menus) => (
              <div
                style={{
                  display: "flex",
                  maxWidth: "800px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  width: "fit-content",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "270px",
                    border: "2px solid #2196f3",
                  }}
                >
                  {items.map((item, index) => (
                    <div
                      onClick={() => setServiceIndex(index)}
                      className={styles.Dropdown}
                      key={index}
                      style={{
                        backgroundColor:
                          serviceIndex === index ? "#2196f3" : "white",
                        color: serviceIndex === index ? "white" : "black",
                      }}
                    >
                      {item.label} <RightOutlined />
                    </div>
                  ))}
                </div>

                <div className={styles.Subcategories}>
                  {items[serviceIndex]?.children.map((item, index) => (
                    <p className={styles.Subcategory} key={index}>
                      {item.label}
                    </p>
                  ))}
                </div>
              </div>
            )}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Space>
                Services <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>{" "}
      </section>
      <section>
        <button
          className={styles.hamburgerBtn}
          onClick={() => setOpenNavigation(!openNavigation)}
          style={{ color: hasScrolled || openNavigation ? "black" : "white" }}
        >
          {openNavigation ? <CloseOutlined /> : <MenuOutlined />}
          {openNavigation && (
            <div
              className={styles.mobileNav}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Link href="/" onClick={() => setOpenNavigation(false)}>
                Home
              </Link>
              <Link href="/about-us">About Us</Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  onClick={() => setShowServices(!showServices)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    paddingRight: "20%",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Services{" "}
                  {showServices ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </p>
              </div>
              {showServices && (
                <Menu
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingRight: "17%",
                  }}
                  mode="inline"
                  items={items}
                />
              )}
              <Link
                href="tel:+917892126783"
                className={styles.MobilecontactUsBtn}
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
            </div>
          )}
        </button>
      </section>{" "}
      <Link href="tel:+917892126783" className={styles.contactUsBtn}>
        Contact Us
      </Link>
    </header>
  );
}
