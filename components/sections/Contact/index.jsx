import React, { useState, useRef } from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "../../atoms/SectionSubtitle/SectionSubtitle";
import Form from "../../organisms/Form";
import PlatziIcon from "../../svg/PlatziIcon";
import CopyClipboardIcon from "../../svg/CopyClipboardIcon";
import classes from "./contact.module.css";

const Contact = () => {
  const [emailCliked, setEmailClicked] = useState(false);
  const refEmail = useRef(null);
  const refGitHub = useRef(null);
  const refLinkedIn = useRef(null);
  const refPlatzi = useRef(null);

  return (
    <section id="contact" className={classes.contact}>
      {/* <Container> */}
      <Row>
        <Col lg="6" md="6" className={classes.row}>
          <SectionSubtitle subtitle="Contact me" />
          <h3 className="mt-4 mb-4">Location and Links</h3>

          <ul className={classes.contact__info__list}>
            <li className={classes.info__item}>
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <p>Buenos Aires, Argentina</p>
            </li>
            <li className={classes.info__item}>
              <span>
                <i className="ri-mail-line"></i>
              </span>
              <p>
                nicolasaldao@live.com{" "}
                <span
                  ref={refEmail}
                  onClick={() => {
                    setEmailClicked(true);
                    navigator.clipboard.writeText("nicolasaldao@live.com");
                    setTimeout(() => {
                      setEmailClicked(false);
                    }, 3000);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <CopyClipboardIcon />
                </span>
              </p>
              {emailCliked ? (
                <UncontrolledTooltip
                  hideArrow
                  isOpen={emailCliked}
                  target={refEmail}
                  style={{
                    margin: "0",
                    backgroundColor: emailCliked ? "green" : "black",
                  }}
                >
                  Copied to clipboard!
                </UncontrolledTooltip>
              ) : null}
            </li>
          </ul>

          <div className={classes.social__links}>
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

        {/* <Col lg="6" md="6">
            <Form />
          </Col> */}
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default Contact;
