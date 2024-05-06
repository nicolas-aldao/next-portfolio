import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12">
            <div
              className={`${classes.footer__copyright} ${classes.marginMobile}`}
            >
              <p>
                &copy; Copyright {year} - Developed by Muhibur Rahman. Modified
                by Nicolás Aldao.{" "}
                {/* <a
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://icons8.com/icon/21106/sun"
                >
                  Sun{" "}
                </a>
                and{" "}
                <a
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://icons8.com/icon/33118/moon-phase"
                >
                  Moon Phase{" "}
                </a>
                icon by{" "}
                <a
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://icons8.com"
                >
                  Icons8
                </a> */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
