import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";

type AppProps = {
  Component: any;
  pageProps: any;
  router: any;
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Character_Azazel_appearance.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="isaac Cheatsheet" />
        <meta property="og:site_name" content="isaac Cheatsheet" />
        <meta property="og:url" content="https://www.isaac-cheatsheet.com/" />
        <meta
          property="og:description"
          content="Find all the items, trinkets, runes, cards, etc. for the best in-game experience on The Binding of Isaac: Rebirth!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.isaac-cheatsheet.com/images/preview.png"
        />
        <meta
          name="description"
          content="Find all the items, trinkets, runes, cards, etc. for the best in-game experience on The Binding of Isaac: Rebirth!"
        />
      </Head>
      <Navbar />
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-[70px] bg-gray-700">
        <Component {...pageProps} key={router.pathname} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
