import React from "react";
import classes from "./styles.module.css";

const GradientBorderAnimated = ({ children }) => {
  return (
    <div>
      <div className={classes.gradientBorder}>{children}</div>
    </div>
  );
};

export default GradientBorderAnimated;
