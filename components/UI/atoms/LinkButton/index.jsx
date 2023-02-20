import React from "react";
import Link from "next/link";
import classes from "./styles.module.css";

const LinkButton = ({ url, text, isExternalUrl, className }) => {
  return (
    <button className={`primary__btn ${classes.atom__btn} ${className}`}>
      {isExternalUrl ? (
        <a href={url}>{text}</a>
      ) : (
        <Link href={url}>{text}</Link>
      )}
    </button>
  );
};

export default LinkButton;
