import React from "react";
import Link from "next/link";
import classes from "./styles.module.css";

const Button = ({ url, text, isExternalUrl }) => {
  return (
    <button className={`primary__btn ${classes.atom__btn}`}>
      {isExternalUrl ? (
        <a href="https://www.google.com">{text}</a>
      ) : (
        <Link href={url}>{text}</Link>
      )}
    </button>
  );
};

export default Button;
