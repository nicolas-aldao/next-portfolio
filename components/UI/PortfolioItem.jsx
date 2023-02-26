import React from "react";
import Image from "next/image";
import Link from "next/link";
import BadgeAtom from "./atoms/BadgeAtom";
import classes from "../../styles/portfolio-item.module.css";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <BadgeAtom key={index}>{item}</BadgeAtom>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img[0]} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
