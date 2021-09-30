import React from "react";
import { SkinnyHeader } from "../../typography/skinny-header/skinny-header.component";
import "./small-fifty-container.styles.scss";
export const SmallFiftyContainer = ({ children, header, info, infoTail }) => {
  return (
    <div className="small-fifty-container">
      <SkinnyHeader tail={infoTail} info={info} text={header} />
      {children}
    </div>
  );
};
