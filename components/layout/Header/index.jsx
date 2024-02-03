import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { Container, Input, FormGroup } from "reactstrap";
import { NAV__LINK } from "../../../constants";
import moonImg from "../../../public/images/moon.png";
import sunImg from "../../../public/images/sun.png";
import { PortfolioContext } from "../../../pages/_app";
import classes from "./header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { isDarkMode, setIsDarkMode } = useContext(PortfolioContext);
  console.log("path ", window?.location.href);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(classes.menu__active);

  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <div className={classes.nav__wrapper}>
          <div
            style={{
              marginBottom: "0",
              fontSize: 25,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormGroup
              switch
              style={{
                display: "flex",
                justifySelf: "center",
              }}
              className="p-3 m-0"
            >
              <Input
                type="switch"
                role="switch"
                style={{
                  marginLeft: "1px",
                  marginRight: "1px",
                  backgroundColor: "var(--primary-color)",
                  cursor: "pointer",
                  border: "none",
                  // height: `${isDarkMode ? "25px" : "28px"}`,
                  backgroundImage: `url(${window?.location.href}${
                    isDarkMode ? moonImg.blurDataURL : sunImg.blurDataURL
                  })`,
                  boxShadow: "none",
                }}
                className="switch m-0"
                onClick={(e) => setIsDarkMode(!isDarkMode)}
              />
            </FormGroup>
          </div>
          <div
            className={classes.navigation}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={classes.nav__menu}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </div>
          <span className={classes.mobile__menu}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
