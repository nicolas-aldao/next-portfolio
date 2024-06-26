import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { PORTFOLIO_DATA } from "../../../constants";
import SectionSubtitle from "../../atoms/SectionSubtitle/SectionSubtitle";
import PortfolioItem from "../PortfolioItem";
import classes from "./portfolio.module.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = PORTFOLIO_DATA.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = PORTFOLIO_DATA.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "All") {
      const filteredData = PORTFOLIO_DATA;

      setData(filteredData);
    }
  }, [filter]);

  const active = classes.tab__btn__active;

  return (
    <section id="portfolio">
      <Container>
        <Row className={classes.row}>
          <Col lg="6" md="6" className={`mb-5 ${classes.col}`}>
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className={`mt-4 ${classes.marginMobile}`}>
              Some of my personal projects
            </h4>
            <p className={classes.marginMobile}>
              Use &quot;All&quot;, &quot;Mobile App&quot; or &quot;Web
              Design&quot; to filter what projects you want to browse
            </p>
          </Col>
          <Col lg="6" md="12" className={classes.col}>
            <div className={classes.tab__btns}>
              <button
                className={`${filter === "All" ? active : ""} secondary__btn`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`${
                  filter === "Mobile App" ? active : ""
                } secondary__btn`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>
        </Row>

        <Row className={`${classes.row} ${classes.rowItems}`}>
          <div className={classes.itemsContainers}>
            {data?.map((item) => (
              <Col key={item.id} className={classes.item}>
                <PortfolioItem item={item} />
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
