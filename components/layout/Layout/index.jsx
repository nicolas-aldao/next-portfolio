import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px" }}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
