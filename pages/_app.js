import { createContext, useState } from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export const PortfolioContext = createContext([]);

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <PortfolioContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioContext.Provider>
  );
}

export default MyApp;
