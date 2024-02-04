import React from "react";
import { ULR_PORTFOLIO } from "../../../constants";
import Button from "../Button";
import classes from "./styles.module.css";

const DownloadCVButton = () => {
  const url = `${ULR_PORTFOLIO}/react-developer-nicolas-aldao.pdf`;
  const downloadFile = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <div>
      <Button
        className={classes.btn_container}
        text="Download CV"
        onClick={() => {
          downloadFile(url);
        }}
      />
    </div>
  );
};

export default DownloadCVButton;
