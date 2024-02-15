import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import GradientBorderAnimated from "../../atoms/GradientBorderAnimated";
import DownloadCVButton from "../../atoms/DownloadCVButton";
import heroImg from "../../../public/images/superhero.png";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.hero__content}>
              <h2
                className={`mt-3 mb-3 ${classes.marginMobile} primary-gradient`}
              >
                I&apos;m Nicolás Aldao
              </h2>
              <h5
                style={{ display: "inline", fontWeight: "bold" }}
                className={`mb-4 ${classes.marginMobileOnlyLeft}`}
              >
                Frontend Developer
              </h5>
              <p style={{ display: "inline" }}> from Argentina</p>
              <p style={{ display: "inline", fontSize: 20 }}> 🇦🇷</p>
              <p className={classes.marginMobile}>
                Welcome to my personal website!
                <br />
                In this place I&apos;ll show you what I know to do and what I
                learned so far.
                <br />
                I&apos;ve worked on a variety of projects, <br />
                but lately, I&apos;m doing focus on React projects.
                <br />
                Hope you enjoy the journey ;)
              </p>
              <div className={classes.marginMobile}>
                <GradientBorderAnimated>
                  <DownloadCVButton />
                </GradientBorderAnimated>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="255" height="290" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
