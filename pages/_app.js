import { createContext, useState } from "react";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export const PortfolioContext = createContext([]);

function MyApp({ Component, pageProps }) {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <PortfolioContext.Provider value={{ isLightMode, setIsLightMode }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioContext.Provider>
  );
}

export default MyApp;
