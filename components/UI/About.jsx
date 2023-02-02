import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import BadgeAtom from "./atoms/BadgeAtom";
import HtmlIcon from "./HtmlIcon";
import CssIcon from "./CssIcon";
import JsIcon from "./JsIcon";
import ReactIcon from "./ReactIcon";
import NextJsIcon from "./NextJsIcon";
import GitIcon from "./GitIcon";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row  className={`${classes.about__row}`}>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" className={`${classes.about__subtitle}`}/>
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              neque asperiores temporibus quo saepe odio, esse labore libero
              obcaecati quidem explicabo blanditiis deleniti ex vitae ratione
              ullam fugiat dicta eum sint officiis porro illum quia. Error quam
              cum excepturi beatae.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">Download CV</Link>
              </button>
            </div>
          </Col>
          <Col lg="6" xs="10" className={`${classes.about__content}`}>
            <section className={`${classes.tecnologies_container}`}>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <HtmlIcon />
                <BadgeAtom key="Html" className={`${classes.skills_badge}`}>
                  Html
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <CssIcon />
                <BadgeAtom key="Css" className={`${classes.skills_badge}`}>
                  Css
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <JsIcon />
                <BadgeAtom
                  key="Javascript"
                  className={`${classes.skills_badge}`}
                >
                  Javascript
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <ReactIcon />
                <BadgeAtom key="React" className={`${classes.skills_badge}`}>
                  React
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <NextJsIcon />
                <BadgeAtom key="Next.js" className={`${classes.skills_badge}`}>
                  Next.js
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <GitIcon />
                <BadgeAtom key="Git" className={`${classes.skills_badge}`}>
                  Git
                </BadgeAtom>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
