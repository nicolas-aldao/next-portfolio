import React, { useContext, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Input, FormGroup } from "reactstrap";
import { NAV__LINK } from "../../constants";
import moonImg from "../../public/images/moon.png";
import sunImg from "../../public/images/sun.png";
import { PortfolioContext } from "../../pages/_app";
import classes from "./header.module.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { isDarkMode, setIsDarkMode } = useContext(PortfolioContext);
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 993 : 0;

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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, "1500");
  }, [isDarkMode]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

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
            {isDarkMode ? (
              <Image
                className={classes.themePlaceholder}
                width={20}
                height={20}
                src={moonImg}
              />
            ) : (
              <div className={classes.themePlaceholder}></div>
            )}
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
                disabled={isLoading}
                style={{
                  marginLeft: "1px",
                  marginRight: "1px",
                  backgroundColor: "var(--primary-color)",
                  cursor: "pointer",
                  border: "none",
                }}
                className="switch m-0"
                onClick={(e) => {
                  if (!isLoading) {
                    setIsDarkMode(!isDarkMode);
                  } else {
                    e.preventDefault();
                  }
                }}
              />
            </FormGroup>
            {!isDarkMode ? (
              <Image
                className={classes.themePlaceholder}
                width={25}
                height={25}
                src={sunImg}
              />
            ) : (
              <div className={classes.themePlaceholder}></div>
            )}
          </div>
          {isLoading && isDesktop ? (
            <div className={classes.loadingContainer}>
              <div className={classes.skeletonItemsContainer}>
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <div className={classes.loadingItem} key={index}>
                      <div className={classes.loadingBar}></div>
                      <div className={classes.loadingBar}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
