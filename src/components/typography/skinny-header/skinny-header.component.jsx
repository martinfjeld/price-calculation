import React from "react";
import { InfoBox } from "../../elements/info-box/info-box.component";
import "./skinny-header.styles.scss";
export const SkinnyHeader = ({ text, info }) => {
  return (
    <div className="skinny-header-container">
      <h2 className="skinny-header">{text}</h2>
      {info && <InfoBox text={info} />}
    </div>
  );
};
