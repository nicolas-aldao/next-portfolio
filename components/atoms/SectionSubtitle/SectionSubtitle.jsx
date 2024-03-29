import React from "react";
import classes from "./subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <h5
      className={`${classes.section__subtitle} ${props.className} primary-gradient`}
    >
      {props.subtitle}
    </h5>
  );
};

export default SectionSubtitle;
