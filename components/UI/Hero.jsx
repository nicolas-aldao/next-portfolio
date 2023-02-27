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
              <h2 className="mt-3 mb-3">I&apos;m Nicolás Aldao</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit rem sint ipsa cumque. Atque rem vel iusto impedit omnis
                quos!
              </p>
              <div className="mt-5">
                <DownloadCVButton/>
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
