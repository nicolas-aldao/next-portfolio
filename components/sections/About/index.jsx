import React from "react";
import { Container, Row, Col } from "reactstrap";
import { technologies, tools } from "../../../constants";
import BadgeAtom from "../../atoms/BadgeAtom";
import SectionSubtitle from "../../atoms/SectionSubtitle/SectionSubtitle";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className={classes.about__row}>
          <Col
            lg="6"
            xs="10"
            className={classes.about__content}
            style={{ padding: "15px" }}
          >
            <SectionSubtitle
              subtitle="About me"
              className={classes.about__subtitle}
            />
            <h3 className={`mt-4 ${classes.marginMobile}`}>
              Technologies I&apos;ve been working with
            </h3>

            <section className={classes.tecnologies_container}>
              {technologies.map((tech, index) => (
                <div className={classes.skill_container} key={index}>
                  {tech.icon}
                  <BadgeAtom key={index} className={classes.skills_badge}>
                    {tech.text}
                  </BadgeAtom>
                </div>
              ))}
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
                {tools.map((tool, index) => (
                  <div className={classes.about__toolItem} key={index}>
                    <span className={classes.about__icon}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    <h4 className={classes.about__toolItemText}>{tool.text}</h4>
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
