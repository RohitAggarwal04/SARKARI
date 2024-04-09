import Head from "next/head";
export const config = {
  unstable_runtimeJS: false,
};

export default function RootLayout({ className, children }) {
  return (
    <main className={`${className}  main`}>
      <Head>
        <link rel="icon" href="/assets/logo1.png" />
        <meta name="viewport" content="width=1024" />
      </Head>{" "}
      <div className={` routeOutlet`}>{children}</div>
    </main>
  );
}
