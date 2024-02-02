import React from "react";
import { Container, Row, Col } from "reactstrap";
import BadgeAtom from "../../atoms/BadgeAtom";
import HtmlIcon from "../../svg/HtmlIcon";
import CssIcon from "../../svg/CssIcon";
import JsIcon from "../../svg/JsIcon";
import ReactIcon from "../../svg/ReactIcon";
import NextJsIcon from "../../svg/NextJsIcon";
import GitIcon from "../../svg/GitIcon";
import JenkinsIcon from "../../svg/JenkinsIcon";
import PostmanIcon from "../../svg/PostmanIcon";
import SwaggerIcon from "../../svg/SwaggerIcon";
import SectionSubtitle from "../../atoms/SectionSubtitle/SectionSubtitle";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <SectionSubtitle
          subtitle="About me"
          className={classes.about__subtitle}
        />
        <Row className={classes.about__row}>
          <Col
            lg="6"
            xs="10"
            className={classes.about__content}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>
              Technologies I&apos;ve been working with
            </h3>

            <section className={classes.tecnologies_container}>
              <div className={classes.skill_container}>
                <HtmlIcon />
                <BadgeAtom key="Html" className={classes.skills_badge}>
                  HTML
                </BadgeAtom>
              </div>
              <div className={classes.skill_container}>
                <CssIcon />
                <BadgeAtom key="Css" className={classes.skills_badge}>
                  CSS
                </BadgeAtom>
              </div>
              <div className={classes.skill_container}>
                <JsIcon />
                <BadgeAtom key="Javascript" className={classes.skills_badge}>
                  JAVASCRIPT
                </BadgeAtom>
              </div>
              <div className={classes.skill_container}>
                <ReactIcon />
                <BadgeAtom key="React" className={classes.skills_badge}>
                  REACT
                </BadgeAtom>
              </div>
              <div
                className={classes.skill_container}
                style={{ marginLeft: "8px", marginRight: "8px" }}
              >
                <NextJsIcon />
                <BadgeAtom key="Next.js" className={classes.skills_badge}>
                  NEXT.JS
                </BadgeAtom>
              </div>
              <div className={classes.skill_container}>
                <GitIcon />
                <BadgeAtom key="Git" className={classes.skills_badge}>
                  GIT
                </BadgeAtom>
              </div>
            </section>
          </Col>
          <Col
            lg="6"
            className={classes.about__content}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>
              I&apos;m here to help your next project
            </h3>
            <p className={classes.marginMobile}>
              I have applied best practices in React, including Atomic Design
              principles and avoiding duplicate code, to create maintainable,
              scalable, and attractive code.
            </p>

            <h5>Other tools I&apos;ve used</h5>
            <div className="d-flex align-items-center gap-5">
              <div className={classes.about__toolContainer}>
                <div className={classes.about__toolItem}>
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4
                    style={{ width: "113px" }}
                    className={classes.about__toolItemText}
                  >
                    Postman
                  </h4>
                  <PostmanIcon />
                </div>
                <div className={classes.about__toolItem}>
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4
                    style={{ width: "100px" }}
                    className={classes.about__toolItemText}
                  >
                    Swagger
                  </h4>
                  <SwaggerIcon />
                </div>
                <div className={classes.about__toolItem}>
                  <span className={classes.about__icon}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h4
                    style={{ width: "95px" }}
                    className={classes.about__toolItemText}
                  >
                    Jenkins
                  </h4>
                  <JenkinsIcon />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
