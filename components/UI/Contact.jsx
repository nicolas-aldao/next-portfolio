import React, { useState, useRef } from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Form from "./Form";
import PlatziIcon from "./PlatziIcon";
import CopyClipboardIcon from "./CopyClipboardIcon";
import classes from "../../styles/contact.module.css";

const Contact = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [emailCliked, setEmailClicked] = useState(false);
  const refEmail = useRef(null);
  const refGitHub = useRef(null);
  const refLinkedIn = useRef(null);
  const refPlatzi = useRef(null);

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
                <p>
                  nicolasaldao@live.com{" "}
                  <span
                    ref={refEmail}
                    onClick={() => {
                      navigator.clipboard.writeText("nicolasaldao@live.com");
                      setEmailClicked(true);
                      setTimeout(() => {
                        setEmailClicked(false);
                      }, 7000);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <CopyClipboardIcon />
                  </span>
                </p>
                <UncontrolledTooltip
                  hideArrow
                  target={refEmail}
                  style={{
                    margin: "0",
                    backgroundColor: emailCliked ? "green" : "black",
                  }}
                >
                  {emailCliked
                    ? "Copied to clipboard!"
                    : "Copy to clipboard"}
                </UncontrolledTooltip>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/nicolas-aldao">
                <i ref={refGitHub} className="ri-github-fill"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/nicolas-aldao/">
                <i ref={refLinkedIn} className="ri-linkedin-fill"></i>
              </Link>
              <Link href="https://platzi.com/p/NicolasAldao/">
                <span ref={refPlatzi}>
                  <PlatziIcon />
                </span>
              </Link>
            </div>
            <div>
              <UncontrolledTooltip target={refGitHub}>
                GitHub Account
              </UncontrolledTooltip>
              <UncontrolledTooltip target={refLinkedIn}>
                LinkedIn Profile
              </UncontrolledTooltip>
              <UncontrolledTooltip target={refPlatzi}>
                Platzi Profile
              </UncontrolledTooltip>
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
