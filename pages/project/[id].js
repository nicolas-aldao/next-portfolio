import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import BadgeAtom from "../../components/UI/atoms/BadgeAtom";
import portfolioData from "../../components/data/portfolio";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import classes from "../../styles/projectId.module.css";
import LinkButton from "../../components/UI/atoms/LinkButton";

const Detail = () => {
  const { query } = useRouter();
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const filteredData = portfolioData.filter((item) => item.id === query.id);

    setData(filteredData[0]);
  }, [query.id]);

  return (
    <section id="projectId" className={`${classes.projectId}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Project details" />
            <h3 className="mt-4 mb-4">{data?.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p>
            <Row className={`${classes.button__container}`}>
              <LinkButton text="Demo" url="http://www.google.com" isExternalUrl className={`${classes.buttons}`}/>
              <LinkButton text="Repository" url="http://www.google.com" isExternalUrl className={`${classes.buttons}`}/>
            </Row>
          </Col>
          <Col lg="6" md="6" className={`${classes.testimonial__container}`}>
            {data ? (
              <>
                <ul>
                  {data?.keyword?.map((word) => (
                    <BadgeAtom key={word}>{word}</BadgeAtom>
                  ))}
                </ul>
                <Slider {...settings}>
                  <div className={`${classes.testimonial__item}`}>
                    <div className={`${classes.testimonial__client}`}>
                      <Image
                        alt="client-img"
                        src={data?.img}
                        width="550"
                        height="350"
                        className=" rounded-2"
                      />
                    </div>
                  </div>

                  <div className={`${classes.testimonial__item}`}>
                    <div className={`${classes.testimonial__client}`}>
                      <Image
                        alt="client-img"
                        src="/images/hero.jpg"
                        width="550"
                        height="350"
                        className=" rounded-2"
                      />
                    </div>
                  </div>

                  <div className={`${classes.testimonial__item}`}>
                    <div className={`${classes.testimonial__client}`}>
                      <Image
                        alt="client-img"
                        src="/images/hero.jpg"
                        width="550"
                        height="350"
                        className=" rounded-2"
                      />
                    </div>
                  </div>
                </Slider>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Detail;
