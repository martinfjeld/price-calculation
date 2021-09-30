import React, { useState } from "react";
import "./info-box.styles.scss";
import { URL } from "../../../config/_config";
import { info } from "autoprefixer";
export const InfoBox = ({ text }) => {
  const [infoBox, setInfoBox] = useState(false);
  const handleHover = (e) => {
    setInfoBox(!infoBox);
  };
  return (
    <div className="info-ico">
      <img
        src={URL + "info2.svg"}
        alt="Ico"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      <div className="info-box" style={{ display: infoBox ? "flex" : "none" }}>
        <p>{text}</p>
      </div>
    </div>
  );
};
