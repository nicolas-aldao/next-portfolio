import React from "react";
import Link from "next/link";
import BadgeAtom from "../../atoms/BadgeAtom";
import classes from "./portfolio-item.module.css";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, shortDescription } = props.item;
  const maxItemsToShow = 3;
  const displayedBadges = keyword.slice(0, maxItemsToShow);

  return (
    <a href={liveUrl}>
      <div style={{ display: "flex" }} className={classes.container}>
        <div
          style={{
            backgroundImage: `url(${img[0]})`,
          }}
          className={classes.img}
        ></div>
        <div className={classes.content}>
          <p>{title}</p>
          <div style={{ display: "flex" }}>
            {displayedBadges.map((item, index) => (
              <BadgeAtom key={index} className={classes.badge}>
                {item}
              </BadgeAtom>
            ))}
          </div>
          <p>{shortDescription}</p>
          <button className={classes.details_button}>
            <Link href={liveUrl}>Details</Link>
          </button>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
