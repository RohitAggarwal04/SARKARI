// _app.js
import Layout from "../components/layout";
import "../styles/global.css";
import localFont from "next/font/local";

const avenir = localFont({
  src: [
    {
      path: "../public/assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/assets/fonts/AvenirNextLTPro-LT.otf",
      weight: "300",
      style: "regular",
    },
  ],
  variable: "--font-avenir",
});

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={avenir.variable}>
      <Component {...pageProps} />
    </Layout>
  );
}
