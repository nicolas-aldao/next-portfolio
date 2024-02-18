import React from "react";
import Image from "next/image";
import Link from "next/link";
import BadgeAtom from "../../atoms/BadgeAtom";
import classes from "./portfolio-item.module.css";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  const maxItemsToShow = 3;
  const displayedBadges = keyword.slice(0, maxItemsToShow);

  return (
    <div className={classes.portfolio__item}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {displayedBadges.map((item, index) => (
          <BadgeAtom key={index} className={classes.badge}>
            {item}
          </BadgeAtom>
        ))}
        {keyword.length > maxItemsToShow && (
          <BadgeAtom className={classes.badge}>...</BadgeAtom>
        )}
      </div>

      <div className={classes.portfolio__img}>
        <Link href={liveUrl}>
          <Image alt="portfolio-img" src={img[0]} width="380" height="250" />
        </Link>
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
