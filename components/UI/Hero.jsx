import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import DownloadCVButton from "./atoms/DownloadCVButton";
import heroImg from "../../public/images/me.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hey!" />
              <h2 className={`mt-3 mb-3 ${classes.marginMobile}`}>
                I&apos;m Nicolás Aldao
              </h2>
              <p style={{display: 'inline'}} className={`${classes.marginMobileOnlyLeft}`}>and I&apos;m </p>
              <h5 style={{ display: 'inline', fontWeight: 'bold'}} className='mb-4'>
                Frontend Developer
              </h5>
              <p className={`${classes.marginMobile}`}>
                Welcome to my personal website!
                <br />
                In this place I&apos;ll show you what I know to do and what I
                learned so far.
                <br />
                In my career as a developer, I was in different kind of
                projects, <br />
                but lately, I&apos;m doing focus on React projects.
                <br />
                Hope you enjoy the journey ;)
              </p>
              <div className={`mt-5 ${classes.marginMobile}`}>
                <DownloadCVButton />
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="300" height="350" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
