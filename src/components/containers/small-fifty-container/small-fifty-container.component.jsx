import React from "react";
import { SkinnyHeader } from "../../typography/skinny-header/skinny-header.component";
import "./small-fifty-container.styles.scss";
export const SmallFiftyContainer = ({ children, header }) => {
  return (
    <div className="small-fifty-container">
      <SkinnyHeader text={header} />
      {children}
    </div>
  );
};
