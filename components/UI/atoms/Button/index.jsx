import React from "react";
import Link from "next/link";
import classes from "./styles.module.css";

const Button = ({ text, className, onClick }) => {
  return (
    <button className={`primary__btn ${classes.atom__btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
