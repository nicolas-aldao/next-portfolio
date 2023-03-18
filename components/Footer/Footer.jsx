import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>Created by Muhib</h6>
            </div>
          </Col> */}
          <Col lg="12">
            <div className={`${classes.footer__copyright} ${classes.marginMobile}`}>
              <p>
                &copy; Copyright {year} - Developed by Muhibur Rahman. Re-designed by Nicolás Aldao. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
