import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import portfolioData from "../data/portfolio";
import SectionSubtitle from "./SectionSubtitle";
import PortfolioItem from "./PortfolioItem";
import BadgeAtom from "./atoms/BadgeAtom";
import HtmlIcon from "./HtmlIcon";
import CssIcon from "./CssIcon";
import JsIcon from "./JsIcon";
import ReactIcon from "./ReactIcon";
import NextJsIcon from "./NextJsIcon";
import GitIcon from "./GitIcon";
import classes from "../../styles/portfolio.module.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("Mobile App");
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

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
        {/* <Row>
          <section className={`${classes.tecnologies_container}`}>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <HtmlIcon />
              <BadgeAtom key="Html" className={`${classes.skills_badge}`}>
                Html
              </BadgeAtom>
            </div>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <CssIcon />
              <BadgeAtom key="Css" className={`${classes.skills_badge}`}>
                Css
              </BadgeAtom>
            </div>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <JsIcon />
              <BadgeAtom key="Javascript" className={`${classes.skills_badge}`}>
                Javascript
              </BadgeAtom>
            </div>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <ReactIcon />
              <BadgeAtom key="React" className={`${classes.skills_badge}`}>
                React
              </BadgeAtom>
            </div>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <NextJsIcon />
              <BadgeAtom key="Next.js" className={`${classes.skills_badge}`}>
                Next.js
              </BadgeAtom>
            </div>
            <div className={`${classes.skill_container} ${classes.red_border}`}>
              <GitIcon />
              <BadgeAtom key="Git" className={`${classes.skills_badge}`}>
                Git
              </BadgeAtom>
            </div>
          </section>
        </Row> */}
      </Container>
    </section>
  );
};

export default Portfolio;
