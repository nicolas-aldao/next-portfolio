import React from "react";
import { Badge } from "reactstrap";
import classes from "./styles.module.css";

const BadgeAtom = ({children, index, className}) => {
  return (
    <Badge className={`${classes.badge} ${className}`} key={index}>
     {children}
    </Badge>
  );
};

export default BadgeAtom;
