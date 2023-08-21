import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import education_work from "../data/education_work";
import classes from "../../styles/education.module.css";

const Education = () => {
  return (
    <>
      <section id="education" className={`${classes.resume}`}>
        <Container>
          <Row>
            <Col lg="6">
              <div data-aos="fade-up" data-aos-delay="100">
                <SectionSubtitle
                  subtitle="Professional Experience"
                  className="mb-4"
                />
                {education_work[0].work
                  .slice(0)
                  .reverse()
                  .map((workItem) => (
                    <div className={`${classes.resume_item}`} key={workItem.id}>
                      <h4>{workItem.role}</h4>
                      <h5>{workItem.time}</h5>
                      <p>
                        <em>{workItem.company}</em>
                      </p>
                      <div className={`${classes.work_details}`}>
                        <p>{workItem.description}</p>
                      </div>
                      <div className={`${classes.work_details}`}>
                        <ul>
                          {workItem.tasks.map((taskItem) => (
                            <li key={taskItem.length}>{taskItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>
            <Col lg="6">
              <div className="" data-aos="fade-up">
                <SectionSubtitle
                  subtitle="Education and Courses"
                  className="mb-4"
                />
                {education_work[0].education
                  .slice(0)
                  .reverse()
                  .map((educationItem) => (
                    <div
                      className={`${classes.resume_item}`}
                      key={educationItem.id}
                    >
                      <h4>{educationItem.title}</h4>
                      <h5>{educationItem.time}</h5>
                      <p>
                        <em>{educationItem.institute}</em>
                      </p>
                      <div className={`${classes.work_details}`}>
                        <p>{educationItem.description}</p>
                      </div>
                      <div className={`${classes.work_details}`}>
                        <ul>
                          {educationItem.tasks.map((taskItem) => (
                            <li key={taskItem.length}>{taskItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Education;
