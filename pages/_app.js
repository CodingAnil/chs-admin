// import node module libraries
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import SSRProvider from "react-bootstrap/SSRProvider";
import { Analytics } from "@vercel/analytics/react";

// import theme style scss file
import "../styles/theme.scss";
import "../styles/global.css"; // Adjust the path if needed
import { NextUIProvider } from "@nextui-org/react";
import DefaultDashboardLayout from "../components/layouts/DefaultDashboardLayout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "Paragon Gents Admin";
  const description = "gay App ";
  const keywords = "Adult";

  // Identify the layout, which will be applied conditionally
  const Layout =
    Component.Layout ||
    (router.pathname.includes("dashboard")
      ? router.pathname.includes("instructor") ||
        router.pathname.includes("student")
        ? DefaultDashboardLayout
        : DefaultDashboardLayout
      : DefaultDashboardLayout);

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.siteName,
        }}
      />
      <NextUIProvider>
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
            <Analytics />
            <Toaster position="top-right" reverseOrder={false} />
          </Provider>
        </Layout>
      </NextUIProvider>
    </SSRProvider>
  );
}

export default MyApp;
