import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import portfolioData from "../../data/portfolio";
import SectionSubtitle from "../SectionSubtitle";
import PortfolioItem from "../PortfolioItem";
import classes from "./portfolio.module.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "All") {
      const filteredData = portfolioData;

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="My portfolio" />
            <h4 className="mt-4">Some of my works</h4>
          </Col>

          <Col lg="6" md="12">
            <div className={`${classes.tab__btns}`}>
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

          {data?.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
