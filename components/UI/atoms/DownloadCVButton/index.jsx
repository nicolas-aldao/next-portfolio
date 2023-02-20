import React from "react";
import Link from "next/link";
import Button from "../Button";

const DownloadCVButton = () => {
  const url = "https://next-portfolio-nicolas-aldao.vercel.app/react-developer-jr-nicolas-aldao.pdf";
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
    <div className="mt-5">
      <Button
        text="Download CV"
        onClick={() => {
          downloadFile(url);
        }}
      />
    </div>
  );
};

export default DownloadCVButton;
