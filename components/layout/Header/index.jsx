import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import { NAV__LINK } from "../../../constants";
// import moonImg from "../../../public/images/moon.png";
// import sunImg from "../../../public/images/sun.png";
// import { PortfolioContext } from "../../../pages/_app";
// import { LightDarkModeSwitch } from "../../organisms/LightDarkModeSwitch";
import classes from "./header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const { isLightMode, setIsLightMode } = useContext(PortfolioContext);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(classes.header__shrink);
    } else {
      headerRef.current.classList.remove(classes.header__shrink);
    }
  };

  // useEffect(() => {
  //   document.body.classList.toggle("light-mode", isLightMode);
  // }, [isLightMode]);

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
          {/* <div
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
                  backgroundImage: `url(${
                    isLightMode ? sunImg.blurDataURL : moonImg.blurDataURL
                  })`,
                  boxShadow: "none",
                }}
                className="switch m-0"
                onClick={(e) => setIsLightMode(!isLightMode)}
              />
            </FormGroup>
          </div> */}
          {/* <LightDarkModeSwitch /> */}
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
