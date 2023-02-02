import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/education.module.css";

const Education = () => {
  return (
    <>
      <section id="education" className="resume">
        <Container>
          <Row>
            <Col lg="6">
              <div className="" data-aos="fade-up">
                <SectionSubtitle subtitle="Education and Courses" className="mb-4" />

                <div className={`${classes.resume_item} pb-0`}>
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <div className={`${classes.work_details}`}>
                    <p>
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p>
                  </div>
                </div>
                <div className={`${classes.resume_item}`}>
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <div className={`${classes.work_details}`}>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto
                      quae reiciendis et quis Eius vel ratione eius unde vitae
                      rerum voluptates asperiores voluptatem Earum molestiae
                      consequatur neque etlon sader mart dila
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="" data-aos="fade-up" data-aos-delay="100">
                <SectionSubtitle
                  subtitle="Professional Experience"
                  className="mb-4"
                />

                <div className={`${classes.resume_item}`}>
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY </em>
                  </p>
                  <div className={`${classes.work_details}`}>
                    <p>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </p>
                    <p>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </p>
                    <p>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </p>
                    <p>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </p>
                  </div>
                </div>
                <div className={`${classes.resume_item}`}>
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <div className={`${classes.work_details}`}>
                    <p>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </p>
                    <p>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </p>
                    <p>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </p>
                    <p>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Education;
