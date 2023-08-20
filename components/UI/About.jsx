import React from "react";
import { Container, Row, Col } from "reactstrap";
import BadgeAtom from "./atoms/BadgeAtom";
import HtmlIcon from "./HtmlIcon";
import CssIcon from "./CssIcon";
import JsIcon from "./JsIcon";
import ReactIcon from "./ReactIcon";
import NextJsIcon from "./NextJsIcon";
import GitIcon from "./GitIcon";
import JenkinsIcon from "./JenkinsIcon";
import PostmanIcon from "./PostmanIcon";
import SwaggerIcon from "./SwaggerIcon";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <SectionSubtitle
          subtitle="About me"
          className={`${classes.about__subtitle}`}
        />
        <Row className={`${classes.about__row}`}>
          <Col
            lg="6"
            xs="10"
            className={`${classes.about__content}`}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>
              Technologies I&apos;ve been working with
            </h3>

            <section className={`${classes.tecnologies_container}`}>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <HtmlIcon />
                <BadgeAtom key="Html" className={`${classes.skills_badge}`}>
                  HTML
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <CssIcon />
                <BadgeAtom key="Css" className={`${classes.skills_badge}`}>
                  CSS
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
                  JAVASCRIPT
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <ReactIcon />
                <BadgeAtom key="React" className={`${classes.skills_badge}`}>
                  REACT
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <NextJsIcon />
                <BadgeAtom key="Next.js" className={`${classes.skills_badge}`}>
                  NEXT.JS
                </BadgeAtom>
              </div>
              <div
                className={`${classes.skill_container} ${classes.red_border}`}
              >
                <GitIcon />
                <BadgeAtom key="Git" className={`${classes.skills_badge}`}>
                  GIT
                </BadgeAtom>
              </div>
            </section>
          </Col>
          <Col
            lg="6"
            className={`${classes.about__content}`}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>
              I&apos;m here to help your next project
            </h3>
            <p className={`${classes.marginMobile}`}>
              I have applied best practices in React, including Atomic Design
              principles and avoiding duplicate code, to create maintainable,
              scalable, and attractive code.
            </p>

            <h5>Other tools I&apos;ve used</h5>
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex flex-wrap mt-3">
                <h5
                  className="d-flex align-items-center gap-2 fw-normal mx-5 mt-4"
                >
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4 style={{ width: '113px' }}>Postman</h4>
                  <PostmanIcon />
                </h5>

                <h5
                  className="d-flex align-items-center gap-2 fw-normal mx-5 mt-4"
                >
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4 style={{ width: '100px' }}>Swagger</h4>
                  <SwaggerIcon />
                </h5>
                <h5
                  className="d-flex align-items-center gap-2 fw-normal mx-5 mt-4"
                >
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4 style={{ width: '95px' }}>Jenkins</h4>
                  <JenkinsIcon />
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
