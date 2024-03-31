"use client";
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
} from "@ant-design/icons";
export default function Header({ category }) {
  const [items, setItems] = useState([]);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showServices, setShowServices] = useState(true);
  useEffect(() => {
    if (category) {
      const categoryIds = category?.result?.map((category) => ({
        id: category.id,
        display_name: category.display_name,
      }));
      const formattedItems = [];
      const promises = categoryIds.map(({ id }) => fetchSubCategories(id));
      Promise.all(promises)
        .then((subCategoriesArray) => {
          subCategoriesArray.forEach((subCategories, index) => {
            formattedItems.push({
              key: `${index + 1}`,
              label: ` ${categoryIds[index].display_name}`,
              children: subCategories.map((subCategory, subIndex) => ({
                key: `${index + 1}-${subIndex + 1}`,
                label: subCategory.display_name,
              })),
            });
          });
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
        background: openNavigation ? "white" : "transparent",
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
        <p style={{ fontWeight: "500" }}>Sarkari Filing</p>{" "}
      </section>
      <section className={styles.menuSection}>
        <div className={styles.menuList}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Services <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Link href="/blogs">Blogs</Link>
        </div>
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
                    paddingRight: "40%",
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
                    paddingRight: "38%",
                  }}
                  mode="inline"
                  items={items}
                />
              )}
              <Link href="/blogs">Blogs</Link>
              <Link
                href="/contact-us"
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
      <Link href="/contact-us" className={styles.contactUsBtn}>
        Contact Us
      </Link>
    </header>
  );
}
