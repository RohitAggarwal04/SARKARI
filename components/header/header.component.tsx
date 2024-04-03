"use client";
import React from "react";

import styles from "./header.module.css";
import logo from "../../public/assets/logo1.png";
import { Dropdown, Menu, Space, message } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CloseOutlined,
  DownOutlined,
  LeftOutlined,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
export default function Header({ category }) {
  const [items, setItems] = useState([]);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showServices, setShowServices] = useState(true);
  const [serviceIndex, setServiceIndex] = useState(0);
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
                label: subCategory.display_name,
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
        `https://65.2.101.63:9000/api/sub_category?category_id=${categoryId}`
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
        background: openNavigation
          ? "white"
          : "linear-gradient(to top, rgba(0, 0, 0, 0.1), black)",
        color: openNavigation ? "black" : "inherit",
      }}
    >
      <section className={styles.logoSection}>
        {" "}
        <Image
          width={40}
          height={40}
          src={logo.src}
          alt="logo"
          style={{ marginRight: "20px" }}
        />{" "}
        <p style={{ fontWeight: "500", color: "white", fontSize: "18px" }}>
          Sarkari Filing
        </p>{" "}
      </section>
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

                <Link
                  href={`/services/${category.result[serviceIndex].id} `}
                  className={styles.Subcategories}
                >
                  {items[serviceIndex]?.children.map((item, index) => (
                    <p className={styles.Subcategory} key={index}>
                      {item.label}
                    </p>
                  ))}
                </Link>
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
                className={styles.contactUsBtn}
                style={{
                  width: "5rem",
                  display: "block",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "400",
                }}
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
