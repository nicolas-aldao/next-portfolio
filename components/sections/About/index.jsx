import React from "react";
import { Container, Row, Col } from "reactstrap";
import { technologies, tools } from "../../../constants";
import SectionSubtitle from "../../atoms/SectionSubtitle/SectionSubtitle";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className={classes.about__row}>
          <SectionSubtitle
            subtitle="About me"
            className={classes.about__subtitle}
          />
          <Col
            lg="6"
            xs="10"
            className={classes.about__content}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>Technologies</h3>
            <div className={classes.tecnologies_container}>
              {technologies.map((tech, index) => (
                <div className={classes.skill_container} key={index}>
                  {tech.icon}
                  <p>{tech.text}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col
            lg="6"
            xs="10"
            className={classes.about__content}
            style={{ padding: "15px" }}
          >
            <h3 className={`mt-4 ${classes.marginMobile}`}>Tools</h3>
            <div className={classes.tecnologies_container}>
              {tools.map((tech, index) => (
                <div className={classes.skill_container} key={index}>
                  {tech.icon}
                  <p>{tech.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
