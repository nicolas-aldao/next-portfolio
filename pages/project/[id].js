import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { PORTFOLIO_DATA } from "../../constants";
// import Carrousel from "../../components/UI/organisms/Carrousel";
import BadgeAtom from "../../components/atoms/BadgeAtom";
import SectionSubtitle from "../../components/atoms/SectionSubtitle/SectionSubtitle";
import LinkButton from "../../components/atoms/LinkButton";
import classes from "./projectId.module.css";

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
    const filteredData = PORTFOLIO_DATA.filter((item) => item.id === query.id);

    setData(filteredData[0]);
  }, [query.id]);

  return (
    <section id="projectId" className={classes.projectId}>
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-4">
            <SectionSubtitle subtitle="Project details" />
            <h3 className="mt-4 mb-4">{data?.title}</h3>
            <p>{data?.description}</p>
            <b className={classes.importantInfo}>{data?.importantInfo}</b>
            <Row className={classes.button__container}>
              <LinkButton
                text="Demo"
                url={data?.deployUrl}
                isExternalUrl
                className={`${classes.buttons} ${classes.main_button}`}
              />
              <LinkButton
                text="Repository"
                url={data?.repoUrl}
                isExternalUrl
                className={classes.buttons}
              />
            </Row>
          </Col>
          <Col lg="6" md="6" className={classes.testimonial__container}>
            {data ? (
              <>
                <ul className={classes.badgeAtomList}>
                  {data?.keyword?.map((word) => (
                    <BadgeAtom key={word} className={classes.badge}>
                      {word}
                    </BadgeAtom>
                  ))}
                </ul>
                <Slider {...settings}>
                  {data?.img?.map((image) => (
                    <div key={image} className={classes.testimonial__item}>
                      <div className={classes.testimonial__client}>
                        <Link href={data?.deployUrl}>
                          <Image
                            style={{ cursor: "pointer" }}
                            alt="client-img"
                            src={image}
                            width="550"
                            height="350"
                            className="rounded-2"
                            objectFit="cover"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
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
