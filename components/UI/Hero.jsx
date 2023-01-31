import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
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
                <button className="primary__btn">
                  <Link href="#">Download CV</Link>
                </button>

                {/* <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button> */}
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              {/* <div className={`${classes.hero__skills} bg-white`}>
                <h6 className="bg-transparent">Skills</h6>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
                <span className="bg-transparent">
                  <i className="ri-bar-chart-line bg-transparent"></i>
                </span>
              </div> */}

              {/* <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3 bg-white`}
              >
                <span className="bg-transparent">
                  <i className="ri-lightbulb-flash-line bg-transparent"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
