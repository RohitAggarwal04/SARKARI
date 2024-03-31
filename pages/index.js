import React from "react";
import Head from "next/head";
import Script from "next/script";
import Banner from "../components/home/Banner/Banner.tsx";
import Services from "../components/home/Services/Services";
import Proposal from "../components/home/Proposal/Proposal";
import Benefits from "../components/home/Benefits/Benefits";
import Testimonials from "../components/home/Testimonial/Testimonials";
import TrustedBy from "../components/home/TrustedBy/TrustedBy";
import Blogs from "../components/home/Blogs/Blogs";
import ContactUs from "../components/home/ContactUs/ContactUs";
import FooterComponent from "../components/footer/footer.component";
import Header from "../components/header/header.component";

export default function Home({ testimonials, blogs, category }) {
  const metadata = {
    title: "Sarkari Filing",
    description:
      "Choosing Sarkari Filing is not just a transaction; it's an investment in the success and growth of your business.",
    icons: {
      icon: "../public/assets/logo1.png",
    },
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VLK6BRCXF2"
        ></Script>
      </Head>{" "}
      <Banner />
      <Header category={category} />
      <Services />
      <Proposal />
      <Benefits />
      <Testimonials />
      <TrustedBy testimonials={testimonials} />
      <Blogs blogs={blogs} />
      <ContactUs />
      <FooterComponent category={category} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const [categoryRes, testimonialRes, seoRes, blogsres] = await Promise.all([
      fetch("http://65.2.101.63:9000/api/category"),
      fetch("http://65.2.101.63:9000/api/testamonial"),
      fetch("http://65.2.101.63:9000/api/seo?entity_id=2&entity_type=CATEGORY"),
      fetch("http://65.2.101.63:9000/api/blog"),
    ]);

    if (!categoryRes.ok || !testimonialRes.ok || !seoRes.ok) {
      throw new Error("Error");
    }

    const [category, testimonials, seoData, blogs] = await Promise.all([
      categoryRes.json(),
      testimonialRes.json(),
      seoRes.json(),
      blogsres.json(),
    ]);

    return { props: { category, testimonials, seoData, blogs } };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { props: { category: null, testimonials: null, seoData: null } };
  }
}
