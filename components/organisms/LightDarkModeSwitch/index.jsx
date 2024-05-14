import React, { useContext, useEffect } from "react";
import { Input, FormGroup } from "reactstrap";
import { PortfolioContext } from "../../../pages/_app";
import moonImg from "../../../public/images/moon.png";
import sunImg from "../../../public/images/sun.png";

export const LightDarkModeSwitch = () => {
  const { isLightMode, setIsLightMode } = useContext(PortfolioContext);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  return (
    <div
      style={{
        margin: "0 15px",
        fontSize: 25,
        display: "flex",
        alignSelf: "center",
      }}
    >
      <FormGroup
        switch
        style={{
          display: "flex",
          justifySelf: "center",
        }}
        className="p-3 m-0"
      >
        <Input
          type="switch"
          role="switch"
          style={{
            marginLeft: "1px",
            marginRight: "1px",
            backgroundColor: "var(--primary-color)",
            cursor: "pointer",
            border: "none",
            backgroundImage: `url(${isLightMode ? sunImg.blurDataURL : moonImg.blurDataURL
              })`,
            boxShadow: "none",
          }}
          className="switch m-0"
          onClick={(e) => setIsLightMode(!isLightMode)}
        />
      </FormGroup>
    </div>
  );
};
