import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Form from "./Form";
import PlatziIcon from "./PlatziIcon";
import classes from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Location and Links</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Buenos Aires - Argentina</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>nicolasaldao@live.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/nicolas-aldao">
                <i className="ri-github-fill"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/nicolas-aldao/">
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link href="https://platzi.com/p/NicolasAldao/">
                <span>
                  <PlatziIcon />
                </span>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
