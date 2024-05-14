import React, { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import { NAV__LINK } from "../../../constants";
import { PortfolioContext } from "../../../pages/_app";
// import { LightDarkModeSwitch } from "../../organisms/LightDarkModeSwitch";
import classes from "./header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { isLightMode } = useContext(PortfolioContext);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(classes.menu__active);

  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <div className={classes.nav__wrapper}>
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
            <i className="ri-menu-line d-flex" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
